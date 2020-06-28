import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator } from "native-base";
const CollapseBox = ({ title, percentage }) => {
  return (
    <Collapse>
      <CollapseHeader
        style={{
          backgroundColor: "#F4F2F2",
          borderRadius: 3,
          display: "flex",
          flexDirection: "row",
          padding: 7,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.listItemTitle}>{title}</Text>
        <Text style={styles.listItemTitle}>{percentage}</Text>
      </CollapseHeader>
      <CollapseBody
        style={{
          backgroundColor: "#F4F2F2",
          borderRadius: 1,
          borderBottomColor: "grey",
          borderBottomWidth: 1,
          display: "flex",
          flexDirection: "column",
          padding: 5,
        }}
      >
        <Text style={styles.listItemText}>Moshe</Text>
        <Text style={styles.listItemText}>Anna</Text>
        <Text style={styles.listItemText}>Elana</Text>
      </CollapseBody>
    </Collapse>
  );
};

const styles = StyleSheet.create({
  listItemTitle: {
    color: "#8755DE",
    fontFamily: "GilroyBold",
    fontSize: 16,
  },
  listItemText: {
    textAlign: "left",
    color: "#8755DE",
    fontSize: 16,
    fontFamily: "GilroyMedium",
    padding: 1,
  },
});
export default CollapseBox;
