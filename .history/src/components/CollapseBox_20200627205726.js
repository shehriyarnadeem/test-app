import React from "react";

const CollapseBox = () => {
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
        <Text style={styles.listItemTitle}>Return</Text>
        <Text style={styles.listItemTitle}>3%</Text>
      </CollapseHeader>
      <CollapseBody
        style={{
          backgroundColor: "#F4F2F2",
          borderRadius: 1,
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

export default CollapseBox;
