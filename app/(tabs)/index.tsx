import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { products } from '../../data/products';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <Text style={styles.text}>A-COFFEE</Text>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyipu6Q_fDmJZGx3TC2wOj9MTJVmP4YNonIQ&s',
          }}
          style={styles.logo}
        />
      </View>

      {/* ===== PRODUCTS ===== */}
      <View style={styles.productsRow}>
        {products.map((p: { id: string; name: string; price: number; image: string }) => (
          <View key={p.id} style={styles.productCard}>
            <Image source={{ uri: p.image }} style={styles.productImage} />
            <Text style={styles.productName}>{p.name}</Text>
            <Text style={styles.productPrice}>{p.price} KD</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EFE6',
  },
  contentContainer: {
    flexGrow: 1,
  },

  /* HEADER */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },

  /* PRODUCTS */
  productsRow: {
    flexDirection: 'row',     // نفس الصف
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  productCard: {
    flex: 1,                  // كل منتج نص الشاشة
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
  },
  productPrice: {
    marginTop: 4,
    fontSize: 14,
  },
});
