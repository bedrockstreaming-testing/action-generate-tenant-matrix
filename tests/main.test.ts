import { expect, test } from "@jest/globals";

import { extractTenant } from "../src/main";

test("find all tenant", async () => {
    const text = `If this file exists, previews will be created for all tenants.

*** BEGIN TENANT LIST ***
rtlmutu
salto
videoland
*** END TENANT LIST ***
`;
    const tenants = extractTenant(text);

    expect(tenants).toStrictEqual(["rtlmutu", "salto", "videoland"]);
});
