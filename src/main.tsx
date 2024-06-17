import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Expenses from "./routes/Expenses/index.tsx";
import NotFound from "./routes/NotFound/index.tsx";
import Invoices from "./routes/Invoices/index.tsx";
import Invoice from "./routes/Invoices/Invoice/index.tsx";
import IvoicesIndex from "./routes/Invoices/InvoicesIndex/index.tsx";
import Welcome from "./routes/Welcome/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Welcome />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          <Route index element={<IvoicesIndex />} />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
