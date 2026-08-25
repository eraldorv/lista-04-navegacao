import { StyleSheet, FlatList, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';

type Produto = {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  imagem: string;
};

const produtos: Produto[] = [
  { 
    id: '1', 
    nome: 'Éter', 
    preco: 'R$ 3.50', 
    descricao: 'Restaura os PP do movimento selecionado de um Pokémon em até 10 pontos.',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ether.png'
  },
  { 
    id: '2', 
    nome: 'Poção Máxima', 
    preco: 'R$ 150', 
    descricao: 'Um medicamento em spray para tratar feridas. Ele restaura completamente o HP máximo de um único Pokémon.',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png'
  },
  { 
    id: '3', 
    nome: 'Proteína', 
    preco: 'R$ 200',
    descricao: 'Uma bebida nutritiva para Pokémon. Ao ser consumida, aumenta o valor base de Ataque de um Pokémon.',
    imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/protein.png'
  },
];

export default function Exercicio2() {
  const router = useRouter();

  const irParaDetalhes = (item: Produto) => {
    router.push({
      pathname: '/twoproduto' as any,
      params: {
        nome: item.nome,
        preco: item.preco,
        descricao: item.descricao,
        imagem: item.imagem,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>POKEMART</Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.cardProduto}>
            <Image 
              source={{ uri: item.imagem }} 
              style={styles.imagemProduto} 
              resizeMode="contain"
            />

            <View style={styles.infoProduto}>
              <Text style={styles.nomeProduto}>{item.nome}</Text>
              <Text style={styles.precoProduto}>{item.preco}</Text>
            </View>

            <Pressable
              style={styles.botaoDetalhes}
              onPress={() => irParaDetalhes(item)}
            >
              <Text style={styles.textoBotao}>Ver Detalhes</Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  lista: {
    gap: 10,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  cardProduto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 4, 
    borderWidth: 2, 
    borderColor: '#2a8164', 
  },
  imagemProduto: {
    width: 48,
    height: 48,
    marginRight: 10,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'monospace',
  },
  precoProduto: {
    fontSize: 14,
    color: '#116146',
    fontWeight: 'bold',
    marginTop: 2,
    fontFamily: 'monospace',
  },
  botaoDetalhes: {
    backgroundColor: '#2a8164',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 0, 
    borderWidth: 1,
    borderColor: '#116146',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
});