import { PageConfig } from "next";

export const config: PageConfig = {
    unstable_runtimeJS: false
};

const NotFound = (): JSX.Element => <p>not found</p>;

export default NotFound;
