import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { HeaderTable, InputFields } from "../utils/types";
import { useAppSelector } from "../hooks/redux";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    width: "100%",
  },
  header: {
    flexDirection: "column",
    justifyContent: "flex-start",
    flexBasis: 2,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  details: {
    flexDirection: "column",
    flexBasis: 2,
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  grandTotal: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  basis: {
    flexBasis: 1,
  },
});
function Voucher({ data }: { data: InputFields | null }) {
  console.log("voucher");
  const { amount, grandTotal } = useAppSelector((state) => state.amount);
  return (
    <PDFViewer width={"100%"} height={"500px"}>
      <Document>
        <Page size={"A4"} style={styles.page}>
          <Text style={{ textAlign: "center" }}>Voucher</Text>
          <View style={styles.header}>
            {Object.keys(data?.header_table as object).map((key) => (
              <Text>
                {key}:{data?.header_table[key as keyof HeaderTable]}
              </Text>
            ))}
          </View>
          <Text style={{ textAlign: "center" }}>Items</Text>
          <View style={styles.details}>
            <View style={styles.item}>
              <Text>No</Text>
              <Text>Name</Text>
              <Text>Quantity</Text>
              <Text>Price</Text>
              <Text>Total</Text>
            </View>
            {data?.detail_table.map((obj, index) => (
              <View key={index} style={styles.item}>
                <Text>{obj.sr_no}</Text>
                <Text>{obj.item_name}</Text>
                <Text>{obj.qty}</Text>
                <Text>{obj.rate}</Text>
                <Text>{amount[index + 1].amount}</Text>
              </View>
            ))}
            <View style={styles.grandTotal}>
              <Text>Grand Total: {grandTotal}</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default Voucher;
