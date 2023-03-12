import { Inter } from "next/font/google";
import ItemLabel from "@/components/ItemLabel";
import { createIntl } from "next-intl";
import Card from "@/components/Card";
import ItemCompare from "@/components/ItemCompare";
import { RegisterByCategory } from "@/components/RegisterByCategory";
import { DateTime } from "luxon";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const intl = createIntl({ locale: "pt-br" });
  const startDate = DateTime.now().startOf("month").toISO();
  const endDate = DateTime.now().endOf("month").toISO();

  const homeData: HomeTotalData = await fetch(
    `${
      process.env.API_URL
    }/dashboard/getTotal?accountId=${process.env.ACCOUNT_ID}&startDate=${startDate}&endDate=${endDate}`
  ).then((res) => res.json());

  const comparisionData: ComparisionData[] = await fetch(
    `${
      process.env.API_URL
    }/dashboard/getComparision?accountId=${process.env.ACCOUNT_ID}&startDate=${startDate}&endDate=${endDate}`
  ).then((res) => res.json());

  const formatNumber = (value: number): string =>
    intl.formatNumber(value, {
      style: "currency",
      currency: "BRL",
      currencyDisplay: "symbol",
    });

  const formatPercent = (value: number): string =>
    intl.formatNumber(value, {
      style: "percent",
      maximumFractionDigits: 2,
      currencyDisplay: "symbol",
    });

  return (
    <div className="text-mauve11  px-4">
      <ItemLabel
        className="flex items-center justify-between pt-8 pb-4"
        label="Período"
        value={homeData.period}
      />
      <ItemLabel
        className="flex items-center justify-between"
        label="Total de Gasto"
        value={formatNumber(homeData.totalPeriod)}
      />

      <Card
        title="Categorias"
        className="mt-4 shadow-purple-400"
        colorClass="bg-teal-500 text-white"
      >
        <ul>
          {homeData.totalByCategories?.map((item) => (
            <ItemLabel
              key={item.name}
              className="flex items-center justify-between"
              label={item.name}
              value={formatNumber(item.value)}
            />
          ))}
        </ul>
      </Card>

      <Card
        title="Comparativo período anterior"
        className="mt-4 shadow-purple-400"
        colorClass="bg-teal-500 text-white"
      >
        {comparisionData?.map((register) => (
          <ItemCompare
            key={register.categoryName}
            label={register.categoryName}
            className="flex items-center justify-between"
            isPositive={register.isBetterThanLastMonth}
            value={formatNumber(register.value)}
            percentValue={formatPercent(register.percentage / 100)}
          />
        ))}
      </Card>

      {/* @ts-expect-error Async Server Component */}
      <RegisterByCategory />
    </div>
  );
}

interface HomeTotalData {
  period: string;
  totalPeriod: number;
  totalByCategories: { name: string; value: number }[];
}

interface ComparisionData {
  categoryName: string;
  value: number;
  percentage: number;
  isBetterThanLastMonth: boolean;
}
