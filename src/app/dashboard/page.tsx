import Card from "@/components/Card";
import ItemCompare from "@/components/ItemCompare";
import ItemLabel from "@/components/ItemLabel";
import { RegisterByCategory } from "@/components/RegisterByCategory";
import { createIntl } from "next-intl";

export default async function Dashboard() {
  const intl = createIntl({ locale: "pt-br" });

  const responseData = await fetch(
    `${process.env.API_URL}/dashboard/getTotal?accountId=${process.env.ACCOUNT_ID}`,
    {
      cache: "no-cache",
    }
  );

  const homeData: HomeTotalData = await responseData.json();

  const responseComparision = await fetch(
    `${process.env.API_URL}/dashboard/getComparision?accountId=${process.env.ACCOUNT_ID}`,
    {
      cache: "no-cache",
    }
  );

  const comparisionData: ComparisionData[] = await responseComparision.json();

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
        {comparisionData &&
          comparisionData.map((register) => (
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