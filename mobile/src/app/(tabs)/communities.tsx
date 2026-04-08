import { StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { getClubs } from '@/services/api';

export default function Communities() {
  const [clubs, setClubs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getClubs()
      .then(setClubs)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ThemedText style={styles.title}>Clubs</ThemedText>

      {loading && <ActivityIndicator style={{ marginTop: 16 }} />}
      {error && <ThemedText>{error}</ThemedText>}

      <FlatList
        data={clubs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ThemedView style={styles.card}>
            <ThemedView style={styles.cardHeader}>
              {item.image_url && (
                <Image source={{ uri: item.image_url }} style={styles.clubImage} />
              )}
              <ThemedView style={{ flex: 1 }}>
                <ThemedText style={styles.clubName}>{item.name}</ThemedText>
                <ThemedText themeColor="textSecondary">{item.category}</ThemedText>
              </ThemedView>
              <ThemedText themeColor="textSecondary">{item.member_count} members</ThemedText>
            </ThemedView>
            <ThemedText style={styles.description}>{item.description}</ThemedText>
          </ThemedView>
        )}
        ListEmptyComponent={!loading ? <ThemedText>No clubs found.</ThemedText> : null}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  title: { fontWeight: 'bold', fontSize: 24, marginBottom: 12 },
  card: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    gap: 6,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  clubImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  clubName: { fontWeight: 'bold', fontSize: 15 },
  description: { fontSize: 14 },
})