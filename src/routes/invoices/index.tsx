import "./styles.css";
import { Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../../data";
import QueryLink from "../../components/QueryLink";

export default function Invoices() {
  const invoices = getInvoices();

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("name") || ""}
          onChange={(event) => {
            const name = event.target.value;
            if (name) {
              setSearchParams({ name });
            } else {
              setSearchParams({});
            }
          }}
        />

        {invoices
          .filter((invoice) => {
            const name = searchParams.get("name");
            if (!name) {
              return true;
            }
            const invoiceName = invoice.name.toLowerCase();
            return invoiceName.startsWith(name.toLowerCase());
          })
          .map((invoice) => (
            <QueryLink
              className={({ isActive }: any) =>
                isActive ? "dblock nav-red" : "dblock nav-blue"
              }
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
