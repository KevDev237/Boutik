import { Refine } from "@refinedev/core";
import { dataProvider } from "./providers/data-providers";

// import "@refinedev/antd/dist/reset.css";
import  Dashboard  from "./components/Dashboard";

export default function App(): JSX.Element {
  return (<Refine dataProvider={dataProvider}>
    <Dashboard/>
  </Refine>
  );
}
