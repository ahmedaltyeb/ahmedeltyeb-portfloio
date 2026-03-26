from __future__ import annotations

import sys
from PySide6.QtCharts import (
    QChart,
    QChartView,
    QLineSeries,
    QBarSeries,
    QBarSet,
    QBarCategoryAxis,
    QValueAxis,
    QPieSeries,
)
from PySide6.QtCore import Qt, QSize
from PySide6.QtGui import QFont, QColor, QStandardItemModel, QStandardItem, QPainter
from PySide6.QtWidgets import (
    QApplication,
    QMainWindow,
    QWidget,
    QFrame,
    QLabel,
    QPushButton,
    QVBoxLayout,
    QHBoxLayout,
    QGridLayout,
    QScrollArea,
    QLineEdit,
    QComboBox,
    QSizePolicy,
    QTableView,
    QHeaderView,
    QSpacerItem,
)


GLOBAL_STYLES = """
QMainWindow {
    background: #F7F8FA;
}

QWidget {
    font-family: "Cairo", "Tajawal", "Noto Kufi Arabic", "Segoe UI";
    color: #111827;
    font-size: 12px;
}

QFrame#sidebar {
    background: #F3F4F6;
    border-right: 1px solid #E5E7EB;
}

QFrame#headerBar {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 14px;
}

QFrame#card {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
}

QFrame#card[accent="blue"] { border-right: 4px solid #2563EB; }
QFrame#card[accent="green"] { border-right: 4px solid #16A34A; }
QFrame#card[accent="orange"] { border-right: 4px solid #F59E0B; }
QFrame#card[accent="red"] { border-right: 4px solid #DC2626; }
QFrame#card[accent="gray"] { border-right: 4px solid #9CA3AF; }

QLabel#sectionTitle {
    font-size: 16px;
    font-weight: 700;
}

QLabel#kpiValue {
    font-size: 32px;
    font-weight: 700;
}

QLabel#kpiLabel {
    font-size: 12px;
    color: #6B7280;
}

QLabel#metaText {
    font-size: 11px;
    color: #6B7280;
}

QPushButton#actionButton {
    background: #111827;
    color: #FFFFFF;
    border-radius: 8px;
    padding: 6px 12px;
}

QPushButton#ghostButton {
    background: transparent;
    color: #111827;
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    padding: 6px 10px;
}

QLineEdit, QComboBox {
    border: 1px solid #E5E7EB;
    border-radius: 8px;
    padding: 6px 10px;
    background: #FFFFFF;
}

QHeaderView::section {
    background: #F3F4F6;
    padding: 8px;
    border: none;
    font-weight: 600;
    color: #374151;
}

QTableView {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    gridline-color: #E5E7EB;
    selection-background-color: #DBEAFE;
    selection-color: #111827;
}
"""


class CardFrame(QFrame):
    def __init__(self, accent: str | None = None, padding: int = 16):
        super().__init__()
        self.setObjectName("card")
        if accent:
            self.setProperty("accent", accent)
        layout = QVBoxLayout(self)
        layout.setContentsMargins(padding, padding, padding, padding)
        layout.setSpacing(8)
        self.setLayout(layout)

    def body_layout(self) -> QVBoxLayout:
        return self.layout()  # type: ignore[return-value]


class KpiCard(CardFrame):
    def __init__(self, title: str, value: str, hint: str, accent: str):
        super().__init__(accent=accent, padding=16)
        layout = self.body_layout()

        label = QLabel(title)
        label.setObjectName("kpiLabel")
        value_label = QLabel(value)
        value_label.setObjectName("kpiValue")
        value_label.setLayoutDirection(Qt.LeftToRight)
        value_label.setAlignment(Qt.AlignRight | Qt.AlignVCenter)

        hint_label = QLabel(hint)
        hint_label.setObjectName("metaText")

        layout.addWidget(label)
        layout.addWidget(value_label)
        layout.addWidget(hint_label)


class AlertCard(CardFrame):
    def __init__(self, title: str, count: str, note: str, accent: str, action_text: str):
        super().__init__(accent=accent, padding=16)
        layout = self.body_layout()

        header = QLabel(title)
        header.setObjectName("kpiLabel")

        count_label = QLabel(count)
        count_label.setObjectName("kpiValue")
        count_label.setLayoutDirection(Qt.LeftToRight)
        count_label.setAlignment(Qt.AlignRight | Qt.AlignVCenter)
        count_label.setStyleSheet(f"color: {self._accent_color(accent)};")

        note_label = QLabel(note)
        note_label.setObjectName("metaText")

        action = QPushButton(action_text)
        action.setObjectName("actionButton")
        action.setCursor(Qt.PointingHandCursor)

        layout.addWidget(header)
        layout.addWidget(count_label)
        layout.addWidget(note_label)
        layout.addWidget(action, alignment=Qt.AlignRight)

    @staticmethod
    def _accent_color(accent: str) -> str:
        return {
            "blue": "#2563EB",
            "green": "#16A34A",
            "orange": "#F59E0B",
            "red": "#DC2626",
            "gray": "#9CA3AF",
        }.get(accent, "#111827")


class SummaryCard(CardFrame):
    def __init__(self, title: str, value: str, accent: str = "gray"):
        super().__init__(accent=accent, padding=14)
        layout = self.body_layout()

        label = QLabel(title)
        label.setObjectName("kpiLabel")

        value_label = QLabel(value)
        value_label.setObjectName("kpiValue")
        value_label.setLayoutDirection(Qt.LeftToRight)
        value_label.setAlignment(Qt.AlignRight | Qt.AlignVCenter)
        value_label.setStyleSheet("font-size: 20px;")

        layout.addWidget(label)
        layout.addWidget(value_label)


class ChartCard(CardFrame):
    def __init__(self, title: str, chart_view: QChartView):
        super().__init__(accent=None, padding=16)
        layout = self.body_layout()
        title_label = QLabel(title)
        title_label.setObjectName("sectionTitle")
        layout.addWidget(title_label)
        layout.addWidget(chart_view)


class DashboardView(QWidget):
    def __init__(self):
        super().__init__()
        self.setLayoutDirection(Qt.RightToLeft)

        main_layout = QHBoxLayout(self)
        main_layout.setContentsMargins(0, 0, 0, 0)
        main_layout.setSpacing(0)

        sidebar = self._build_sidebar()
        content_area = self._build_content_area()

        main_layout.addWidget(sidebar)
        main_layout.addWidget(content_area)

    def _build_sidebar(self) -> QFrame:
        sidebar = QFrame()
        sidebar.setObjectName("sidebar")
        sidebar.setFixedWidth(220)
        layout = QVBoxLayout(sidebar)
        layout.setContentsMargins(16, 20, 16, 20)
        layout.setSpacing(12)

        title = QLabel("PharmaX")
        title.setFont(QFont("", 14, QFont.Bold))
        subtitle = QLabel("نظام إدارة الصيدلية")
        subtitle.setObjectName("metaText")

        layout.addWidget(title)
        layout.addWidget(subtitle)
        layout.addSpacing(16)

        for label in ["لوحة التحكم", "المبيعات", "الأدوية", "الموردين", "التقارير", "الإعدادات"]:
            item = QLabel(label)
            item.setStyleSheet("padding: 8px;")
            layout.addWidget(item)

        layout.addItem(QSpacerItem(20, 40, QSizePolicy.Minimum, QSizePolicy.Expanding))
        user = QLabel("أحمد الطيب\nمدير الصيدلية")
        user.setObjectName("metaText")
        layout.addWidget(user)
        return sidebar

    def _build_content_area(self) -> QWidget:
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setFrameShape(QFrame.NoFrame)

        content = QWidget()
        content_layout = QVBoxLayout(content)
        content_layout.setContentsMargins(24, 20, 24, 32)
        content_layout.setSpacing(24)

        content_layout.addWidget(self._build_header())
        content_layout.addLayout(self._build_kpi_section())
        content_layout.addLayout(self._build_alerts_section())
        content_layout.addLayout(self._build_charts_section())
        content_layout.addWidget(self._build_action_table())
        content_layout.addLayout(self._build_summary_section())

        scroll.setWidget(content)
        return scroll

    def _build_header(self) -> QFrame:
        header = QFrame()
        header.setObjectName("headerBar")
        layout = QHBoxLayout(header)
        layout.setContentsMargins(16, 12, 16, 12)
        layout.setSpacing(16)

        title_block = QVBoxLayout()
        title = QLabel("لوحة التحكم")
        title.setFont(QFont("", 18, QFont.Bold))
        subtitle = QLabel("نظرة تشغيلية سريعة لأداء اليوم")
        subtitle.setObjectName("metaText")
        updated = QLabel("آخر تحديث: 09:45 ص")
        updated.setObjectName("metaText")

        title_block.addWidget(title)
        title_block.addWidget(subtitle)
        title_block.addWidget(updated)

        filters = QHBoxLayout()
        filters.setSpacing(8)

        date_filter = QComboBox()
        date_filter.addItems(["اليوم", "آخر 7 أيام", "آخر 30 يوم"])
        branch_filter = QComboBox()
        branch_filter.addItems(["فرع الرئيسي", "فرع المدينة"])
        cashier_filter = QComboBox()
        cashier_filter.addItems(["كل الموظفين", "محمد", "سارة"])
        search = QLineEdit()
        search.setPlaceholderText("بحث سريع")
        search.setFixedWidth(160)

        for widget in [date_filter, branch_filter, cashier_filter, search]:
            widget.setMinimumHeight(32)

        filters.addWidget(date_filter)
        filters.addWidget(branch_filter)
        filters.addWidget(cashier_filter)
        filters.addWidget(search)

        layout.addLayout(title_block, 1)
        layout.addLayout(filters)
        return header

    def _build_kpi_section(self) -> QGridLayout:
        grid = QGridLayout()
        grid.setSpacing(16)

        cards = [
            KpiCard("مبيعات اليوم", "18,450 ر.س", "+12% مقارنة بالأمس", "blue"),
            KpiCard("صافي الربح اليوم", "4,380 ر.س", "هامش 24%", "green"),
            KpiCard("عدد الفواتير", "128", "متوسط 5 دقائق للفاتورة", "gray"),
            KpiCard("متوسط الفاتورة", "144 ر.س", "ارتفاع 8%", "blue"),
        ]

        for col, card in enumerate(cards):
            grid.addWidget(card, 0, col)

        return grid

    def _build_alerts_section(self) -> QGridLayout:
        grid = QGridLayout()
        grid.setSpacing(16)

        alerts = [
            AlertCard("نقص مخزون", "15", "منتجات بحاجة لإعادة طلب", "orange", "مراجعة المخزون"),
            AlertCard("منتهي الصلاحية", "4", "إزالة فورية مطلوبة", "red", "عرض الأصناف"),
            AlertCard("ينتهي خلال 30 يوم", "21", "مراجعة عروض البيع", "orange", "تخطيط العروض"),
            AlertCard("فواتير معلقة", "6", "انتظار الدفع أو المراجعة", "red", "فتح الفواتير"),
        ]

        for col, card in enumerate(alerts):
            grid.addWidget(card, 0, col)

        return grid

    def _build_charts_section(self) -> QGridLayout:
        grid = QGridLayout()
        grid.setSpacing(16)

        sales_trend = ChartCard("اتجاه المبيعات آخر 14 يوم", self._build_sales_trend_chart())
        top_products = ChartCard("أكثر 10 أدوية مبيعاً", self._build_top_products_chart())
        payment_chart = ChartCard("توزيع طرق الدفع", self._build_payment_method_chart())
        comparison_chart = ChartCard("المبيعات مقابل المشتريات والمرتجعات", self._build_sales_comparison_chart())

        grid.addWidget(sales_trend, 0, 0, 1, 2)
        grid.addWidget(top_products, 1, 0)
        grid.addWidget(payment_chart, 1, 1)
        grid.addWidget(comparison_chart, 2, 0, 1, 2)

        return grid

    def _build_action_table(self) -> QFrame:
        wrapper = QFrame()
        wrapper.setObjectName("card")
        layout = QVBoxLayout(wrapper)
        layout.setContentsMargins(16, 16, 16, 16)
        layout.setSpacing(12)

        title = QLabel("عناصر تتطلب إجراء")
        title.setObjectName("sectionTitle")
        layout.addWidget(title)

        table = QTableView()
        model = QStandardItemModel(0, 6)
        model.setHorizontalHeaderLabels([
            "الصنف",
            "السبب",
            "الأيام المتبقية",
            "المخزون",
            "المورد",
            "إجراء",
        ])

        rows = [
            ("باراسيتامول 500", "قرب انتهاء", "12", "18", "صيدلية النور", "مراجعة"),
            ("فيتامين سي", "نقص مخزون", "—", "6", "الشفاء", "طلب جديد"),
            ("أموكسيسيلين", "مرتجع اليوم", "—", "24", "المجد", "تحليل"),
            ("كلاريتين", "قرب انتهاء", "25", "12", "المجد", "عرض ترويجي"),
        ]

        for row in rows:
            items = [QStandardItem(value) for value in row]
            model.appendRow(items)

        table.setModel(model)
        table.setAlternatingRowColors(True)
        table.horizontalHeader().setStretchLastSection(True)
        table.horizontalHeader().setSectionResizeMode(QHeaderView.Stretch)
        table.verticalHeader().setVisible(False)
        table.setSelectionBehavior(QTableView.SelectRows)
        table.setMinimumHeight(240)

        for row_index in range(model.rowCount()):
            btn = QPushButton(model.item(row_index, 5).text())
            btn.setObjectName("ghostButton")
            table.setIndexWidget(model.index(row_index, 5), btn)

        layout.addWidget(table)
        return wrapper

    def _build_summary_section(self) -> QGridLayout:
        grid = QGridLayout()
        grid.setSpacing(16)

        cards = [
            SummaryCard("مستحقات الموردين", "12,700 ر.س", "gray"),
            SummaryCard("فروقات المخزون", "‑2.3%", "orange"),
            SummaryCard("نقدية الصندوق", "6,450 ر.س", "green"),
            SummaryCard("مرتجعات اليوم", "9 فواتير", "red"),
        ]

        for col, card in enumerate(cards):
            grid.addWidget(card, 0, col)

        return grid

    def _build_sales_trend_chart(self) -> QChartView:
        series = QLineSeries()
        points = [12, 14, 11, 16, 18, 17, 19, 21, 20, 18, 22, 24, 23, 26]
        for index, value in enumerate(points):
            series.append(index, value)
        series.setColor(QColor("#2563EB"))
        series.setUseOpenGL(False)

        chart = QChart()
        chart.addSeries(series)
        chart.legend().hide()
        chart.setBackgroundVisible(False)

        axis_x = QBarCategoryAxis()
        axis_x.append([str(day) for day in range(1, 15)])
        axis_y = QValueAxis()
        axis_y.setRange(0, 30)
        axis_y.setLabelFormat("%d")

        chart.addAxis(axis_x, Qt.AlignBottom)
        chart.addAxis(axis_y, Qt.AlignLeft)
        series.attachAxis(axis_x)
        series.attachAxis(axis_y)

        view = QChartView(chart)
        view.setRenderHint(QPainter.Antialiasing)
        view.setMinimumHeight(260)
        return view

    def _build_top_products_chart(self) -> QChartView:
        series = QBarSeries()
        values = QBarSet("الوحدات")
        values << 120 << 98 << 86 << 80 << 77 << 72 << 66 << 60 << 55 << 50
        values.setColor(QColor("#16A34A"))
        series.append(values)

        chart = QChart()
        chart.addSeries(series)
        chart.legend().hide()
        chart.setBackgroundVisible(False)

        axis_x = QBarCategoryAxis()
        axis_x.append([
            "بنادول",
            "زيرتك",
            "أوجمنتين",
            "كلاريتين",
            "فيتامين C",
            "بروفين",
            "أوميبرازول",
            "نيفوبين",
            "أدفيل",
            "فولتارين",
        ])
        axis_y = QValueAxis()
        axis_y.setRange(0, 140)
        axis_y.setLabelFormat("%d")

        chart.addAxis(axis_x, Qt.AlignBottom)
        chart.addAxis(axis_y, Qt.AlignLeft)
        series.attachAxis(axis_x)
        series.attachAxis(axis_y)

        view = QChartView(chart)
        view.setRenderHint(QPainter.Antialiasing)
        view.setMinimumHeight(260)
        return view

    def _build_payment_method_chart(self) -> QChartView:
        series = QPieSeries()
        series.append("مدى", 45)
        series.append("نقدي", 30)
        series.append("بطاقة", 25)
        series.slices()[0].setBrush(QColor("#2563EB"))
        series.slices()[1].setBrush(QColor("#16A34A"))
        series.slices()[2].setBrush(QColor("#F59E0B"))

        chart = QChart()
        chart.addSeries(series)
        chart.legend().setAlignment(Qt.AlignRight)
        chart.setBackgroundVisible(False)

        view = QChartView(chart)
        view.setRenderHint(QPainter.Antialiasing)
        view.setMinimumHeight(260)
        return view

    def _build_sales_comparison_chart(self) -> QChartView:
        sales = QBarSet("مبيعات")
        purchases = QBarSet("مشتريات")
        returns = QBarSet("مرتجعات")

        sales << 45 << 50 << 48 << 60
        purchases << 30 << 35 << 28 << 40
        returns << 5 << 6 << 4 << 7

        sales.setColor(QColor("#2563EB"))
        purchases.setColor(QColor("#16A34A"))
        returns.setColor(QColor("#DC2626"))

        series = QBarSeries()
        series.append(sales)
        series.append(purchases)
        series.append(returns)

        chart = QChart()
        chart.addSeries(series)
        chart.setBackgroundVisible(False)
        chart.legend().setAlignment(Qt.AlignBottom)

        axis_x = QBarCategoryAxis()
        axis_x.append(["الأسبوع 1", "الأسبوع 2", "الأسبوع 3", "الأسبوع 4"])
        axis_y = QValueAxis()
        axis_y.setRange(0, 80)
        axis_y.setLabelFormat("%d")

        chart.addAxis(axis_x, Qt.AlignBottom)
        chart.addAxis(axis_y, Qt.AlignLeft)
        series.attachAxis(axis_x)
        series.attachAxis(axis_y)

        view = QChartView(chart)
        view.setRenderHint(QPainter.Antialiasing)
        view.setMinimumHeight(240)
        return view


class DashboardWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("PharmaX Dashboard")
        self.setMinimumSize(QSize(1200, 780))
        self.setCentralWidget(DashboardView())


def main() -> None:
    app = QApplication(sys.argv)
    app.setLayoutDirection(Qt.RightToLeft)
    app.setStyleSheet(GLOBAL_STYLES)
    app.setFont(QFont("Cairo", 10))

    window = DashboardWindow()
    window.show()
    sys.exit(app.exec())


if __name__ == "__main__":
    main()
