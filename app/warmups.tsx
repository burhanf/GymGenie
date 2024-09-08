import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { Appbar, Button, DataTable } from "react-native-paper";
import { Link, useRouter } from "expo-router";
interface Warmup {
  id: number;
  exercise: string;
  sets: number;
  reps: string;
  notes: string;
  tutorial: string;
  color: string;
}

const warmupData: Warmup[] = [
  {
    id: 0,
    exercise: "LOW INTENSITY CARDIO",
    sets: 0,
    reps: "5-10MIN",
    notes: "PICK ANY MACHINE WHICH ELEVATES YOUR HEART RATE TO 100-135BPM",
    tutorial: "",
    color: "#eeeeee",
  },
  {
    id: 1,
    exercise: "FOAM ROLLING/LACROSSE BALL",
    sets: 0,
    reps: "2-3MIN",
    notes:
      "FOAM ROLL LARGE MUSCLE GROUPS: QUADS, LATS, CALVES. OPTIONALLY USE A LACROSSE BALL FOR SMALLER MUSCLE GROUPS: PECS, DELTS, HAMSTRING",
    tutorial: "",
    color: "#eeeeee",
  },
  {
    id: 2,
    exercise: "FRONT/BACK LEG SWING",
    sets: 2,
    reps: "12",
    notes: "12 EACH LEG",
    tutorial: "",
    color: "#c3d1ec",
  },
  {
    id: 3,
    exercise: "SIDE/SIDE LEG SWING",
    sets: 2,
    reps: "12",
    notes: "12 EACH LEG",
    tutorial: "",
    color: "#c3d1ec",
  },
  {
    id: 4,
    exercise: "STANDING GLUTE SQUEEZE",
    sets: 2,
    reps: "15 SEC",
    notes: "SQUEEZE YOUR GLUTES AS HARD AS POSSIBLE",
    tutorial: "",
    color: "#c3d1ec",
  },
  {
    id: 5,
    exercise: "PRONE TRAP RAISE",
    sets: 2,
    reps: "15",
    notes: "MIND MUSCLE CONNECTION WITH MID BACK",
    tutorial: "",
    color: "#abdcb4",
  },
  {
    id: 6,
    exercise: "CABLE EXTERNAL ROTATION",
    sets: 2,
    reps: "15",
    notes: "15 EACH SIDE",
    tutorial: "",
    color: "#ffcec4",
  },
  {
    id: 7,
    exercise: "CABLE INTERNAL ROTATION",
    sets: 2,
    reps: "15",
    notes: "15 EACH SIDE",
    tutorial: "",
    color: "#ffcec4",
  },
  {
    id: 8,
    exercise: "OVERHEAD SHRUG",
    sets: 2,
    reps: "15",
    notes: "LIGHT SQUEEZE ON TRAPS AT THE TOP OF EACH REP",
    tutorial: "",
    color: "#abdcb4",
  },
];

export default function Warmups() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Warm Ups" />
      </Appbar.Header>

      <View style={styles.contentContainer}>
        <ScrollView style={styles.scrollView}>
          <DataTable>
            <DataTable.Header style={styles.head}>
              <DataTable.Title
                textStyle={{ color: "white" }}
                style={styles.exercise}
              >
                Exercise
              </DataTable.Title>
              <DataTable.Title textStyle={{ color: "white" }}>
                Sets
              </DataTable.Title>
              <DataTable.Title textStyle={{ color: "white" }}>
                Reps/Time
              </DataTable.Title>
              <DataTable.Title textStyle={{ color: "white" }}>
                Notes
              </DataTable.Title>
            </DataTable.Header>

            {warmupData.map((warmup) => (
              <DataTable.Row
                key={warmup.id}
                style={[styles.row, { backgroundColor: warmup.color }]}
              >
                <DataTable.Cell style={styles.exercise}>
                  <Text style={styles.cellText}>{warmup.exercise}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={styles.cellText}>{warmup.sets}</Text>
                </DataTable.Cell>
                <DataTable.Cell>
                  <Text style={styles.cellText}>{warmup.reps}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={styles.notesCell}>
                  <Text style={styles.cellText}>{warmup.notes}</Text>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appbar: {
    paddingTop: 0,
  },
  contentContainer: {
    flex: 1,
    marginTop: 5, // Adjust margin top to account for Appbar height
  },
  scrollView: {
    flex: 1,
  },
  head: {
    height: 44,
    backgroundColor: "gray",
  },
  row: {
    minHeight: 80, // Increase row height to fit multi-line text
    alignItems: "flex-start",
  },
  exercise: {
    padding: 5,
  },
  notesCell: {
    padding: 10,
  },
  cellText: {
    color: "black",
    flexWrap: "wrap", // Ensure text wraps inside the cells
  },
});
