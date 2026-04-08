import { StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import { getPosts } from '@/services/api';

export default function HomeScreen() {
  const router = useRouter();
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ThemedView style={styles.container} safe={true}>

      <ThemedView style={styles.header} pointerEvents="box-none">
        <ThemedText style={styles.title}>MyUniClubDemo</ThemedText>
        <TouchableOpacity onPress={() => router.push('/login')} style={styles.logoButton}>
          <Image source={require('@/assets/images/CherryTreeGlyph.png')} style={styles.image}/>
        </TouchableOpacity>
      </ThemedView>

      <ThemedText style={styles.heading}>Recent Events</ThemedText>



      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ThemedView style={styles.card}>
            <ThemedView style={styles.cardHeader}>
              {item.club?.image_url && (
                <Image source={{ uri: item.club.image_url }} style={styles.clubImage} />
              )}
              <ThemedView>
                <ThemedText style={styles.cardTitle}>{item.title}</ThemedText>
                <ThemedText themeColor="textSecondary">{item.club?.name}</ThemedText>
              </ThemedView>
            </ThemedView>
            <ThemedText style={styles.cardDescription}>{item.description}</ThemedText>
            {item.event_date && (
              <ThemedText themeColor="textSecondary" style={styles.cardMeta}>
                {new Date(item.event_date).toLocaleDateString()}
                {item.location ? ` @ ${item.location}` : ''}
              </ThemedText>
            )}
          </ThemedView>
        )}
        ListEmptyComponent={!loading ? <ThemedText>No posts yet.</ThemedText> : null}
      />

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 8, flex: 1 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  logoButton: { padding: 4 },
  image: { width: 40, height: 40, resizeMode: 'contain' },
  title: { fontWeight: 'bold', fontSize: 24 },
  heading: { fontSize: 16, fontWeight: 'bold', marginVertical: 8 },
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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardTitle: { fontWeight: 'bold', fontSize: 15 },
  cardDescription: { fontSize: 14 },
  cardMeta: { fontSize: 12 },
})