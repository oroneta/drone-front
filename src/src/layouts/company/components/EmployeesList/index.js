// @mui material components
import Card from "@mui/material/Card";

// Oroneta components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import Table from "examples/Tables/Table";

// Data
import eTableData from "layouts/company/components/EmployeesList/data/eTableData";

const EmployeesList = () => {
    const { columns, rows } = eTableData;

    return (<Card className="Card-Root">
                <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
                    <VuiTypography variant="lg" color="white">
                        List of Employees
                    </VuiTypography>
                </VuiBox>
                <VuiBox
                    sx={{
                        "& th": {
                        borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                            `${borderWidth[1]} solid ${grey[700]}`,
                        },
                        "& .MuiTableRow-root:not(:last-child)": {
                        "& td": {
                            borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                            `${borderWidth[1]} solid ${grey[700]}`,
                        },
                        },
                    }}
                >
                    <Table columns={columns} rows={rows} />
                </VuiBox>
          </Card>);
}

export default EmployeesList;