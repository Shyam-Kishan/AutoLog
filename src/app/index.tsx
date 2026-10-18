
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.appName}>AutoLog</Text>
        <Text style={styles.subtitle}>
          Your vehicle, taken care of.
        </Text>

        <View style={styles.vehicleCard}>
          <Text style={styles.label}>MY VEHICLE</Text>
          <Text style={styles.vehicleName}>1998 Toyota Camry</Text>
          <Text style={styles.mileage}>183,000 miles</Text>
        </View>

        <Text style={styles.sectionTitle}>Upcoming maintenance</Text>

        <View style={styles.maintenanceCard}>
          <View>
            <Text style={styles.serviceName}>Oil change</Text>
            <Text style={styles.serviceDetails}>Due in 500 miles</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>

        <View style={styles.maintenanceCard}>
          <View>
            <Text style={styles.serviceName}>Tire rotation</Text>
            <Text style={styles.serviceDetails}>Due in 1,000 miles</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </View>

        <View style={styles.maintenanceCard}>
          <View>
            <Text style={styles.serviceName}>Hello World!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    padding: 24,
    paddingTop: 32,
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#172554',
  },
  subtitle: {
    fontSize: 15,
    color: '#64748B',
    marginTop: 6,
    marginBottom: 28,
  },
  vehicleCard: {
    backgroundColor: '#172554',
    padding: 22,
    borderRadius: 18,
    marginBottom: 32,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#BFDBFE',
    letterSpacing: 1.5,
  },
  vehicleName: {
    fontSize: 23,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 12,
  },
  mileage: {
    fontSize: 16,
    color: '#DBEAFE',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#172554',
    marginBottom: 14,
  },
  maintenanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },
  serviceDetails: {
    fontSize: 14,
    color: '#64748B',
    marginTop: 5,
  },
  arrow: {
    fontSize: 28,
    color: '#64748B',
  },
});
