import { Text, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { DataTable } from "react-native-paper";
import { Link } from "expo-router";
interface Warmup {
  id: number;
  exercise: string;
  sets: number;
  reps: string;
  notes: string;
  tutorial: string;
}

const warmupData: Warmup[] = [
  {
    id: 0,
    exercise: "LOW INTENSITY CARDIO",
    sets: 0,
    reps: "5-10MIN",
    notes: "PICK ANY MACHINE WHICH ELEVATES YOUR HEART RATE TO 100-135BPM",
    tutorial: "",
  },
  {
    id: 1,
    exercise: "FOAM ROLLING/LACROSSE BALL",
    sets: 0,
    reps: "2-3MIN",
    notes:
      "FOAM ROLL LARGE MUSCLE GROUPS: QUADS, LATS, CALVES. OPTIONALLY USE A LACROSSE BALL FOR SMALLER MUSCLE GROUPS: PECS, DELTS, HAMSTRING",
    tutorial: "",
  },
  {
    id: 2,
    exercise: "FRONT/BACK LEG SWING",
    sets: 2,
    reps: "12",
    notes: "12 EACH LEG",
    tutorial: "",
  },
  {
    id: 3,
    exercise: "SIDE/SIDE LEG SWING",
    sets: 2,
    reps: "12",
    notes: "12 EACH LEG",
    tutorial: "",
  },
  {
    id: 4,
    exercise: "STANDING GLUTE SQUEEZE",
    sets: 2,
    reps: "15 SEC",
    notes: "SQUEEZE YOUR GLUTES AS HARD AS POSSIBLE",
    tutorial: "",
  },
  {
    id: 5,
    exercise: "PRONE TRAP RAISE",
    sets: 2,
    reps: "15",
    notes: "MIND MUSCLE CONNECTION WITH MID BACK",
    tutorial: "",
  },
  {
    id: 6,
    exercise: "CABLE EXTERNAL ROTATION",
    sets: 2,
    reps: "15",
    notes: "15 EACH SIDE",
    tutorial: "",
  },
  {
    id: 7,
    exercise: "CABLE INTERNAL ROTATION",
    sets: 2,
    reps: "15",
    notes: "15 EACH SIDE",
    tutorial: "",
  },
  {
    id: 8,
    exercise: "OVERHEAD SHRUG",
    sets: 2,
    reps: "15",
    notes: "LIGHT SQUEEZE ON TRAPS AT THE TOP OF EACH REP",
    tutorial: "",
  },
];

export default function Warmups() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header style={styles.head}>
          <DataTable.Title style={styles.exercise}>Exercise</DataTable.Title>
          <DataTable.Title numeric>Sets</DataTable.Title>
          <DataTable.Title>Reps/Time</DataTable.Title>
          <DataTable.Title>Notes</DataTable.Title>
        </DataTable.Header>

        {warmupData.map((warmup, key) => {
          key = warmup.id;
          return (
            <DataTable.Row style={styles.row}>
              <DataTable.Cell style={styles.exercise}>
                {warmup.exercise}
              </DataTable.Cell>
              <DataTable.Cell>{warmup.sets}</DataTable.Cell>
              <DataTable.Cell>{warmup.reps}</DataTable.Cell>
              <DataTable.Cell>
                <ScrollView horizontal style={styles.scrollView}>
                  <Text>{warmup.notes}</Text>
                </ScrollView>
              </DataTable.Cell>
            </DataTable.Row>
          );
        })}
      </DataTable>

      <Link href="/" asChild>
        <Pressable>
          <Text>Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  head: { height: 44, backgroundColor: "lavender" },
  row: { height: 40, backgroundColor: "lightyellow" },
  exercise: { flex: 2.5, padding: 5 },
  scrollView: {
    maxHeight: 60, // Adjust height as needed
  },
});
