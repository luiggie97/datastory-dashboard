import { CountrySelector } from "../components/CountrySelector";
import { MeasureSelector } from "../components/MeasureSelector";
import { Chart } from "../components/Chart";
import { IndicatorCard } from "../components/IndicatorCard";
import { Spin, Layout, Typography, Card } from "antd";
import { useDashboardData } from "../hooks/useDashboardData";
import styles from "../styles/module/dashboard.module.css";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Home() {
    const {
        countries,
        selectedCountry,
        setSelectedCountry,
        selectedMeasure,
        setSelectedMeasure,
        data,
        loading,
    } = useDashboardData();

    return (
        <Layout className={styles.layout}>
            <Header className={styles.header}>
                <Title level={3} className={styles.title}>
                    Datastory Dashboard
                </Title>
            </Header>
            <Content className={styles.content}>
                <Card
                    className={styles.card}
                    styles={{ body: { padding: "2rem" } }}
                >
                    <div className={styles.controls}>
                        <CountrySelector
                            countries={countries}
                            onSelect={setSelectedCountry}
                        />
                        <MeasureSelector onSelect={setSelectedMeasure} />
                    </div>
                    {loading ? (
                        <div className={styles.loadingContainer}>
                            <Spin size="large" />
                        </div>
                    ) : data.length > 0 ? (
                        <>
                            <Chart data={data} />
                            <div className={styles.centered}>
                                <IndicatorCard data={data} />
                            </div>
                        </>
                    ) : (
                        <div className={styles.noData}>No data were found.</div>
                    )}
                </Card>
            </Content>
        </Layout>
    );
}
