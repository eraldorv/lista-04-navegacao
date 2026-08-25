import { Image, View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Tela1() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.pokedex}>
                <Text style={styles.pokedexTexto}>Bem vindo, treinador!</Text>
            </View>

            <View style={styles.cardsContainer}>

                <View style={styles.colunaEsquerda}>
                    <View style={styles.cardP}>
                        <Image
                            style={styles.pokeico}
                            source={{ uri: 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png' }}
                        />

                    </View>

                    <Pressable style={styles.botao} onPress={() => router.push('/')}>
                        <Text style={styles.textoBotao}>Voltar para Pichu</Text>
                    </Pressable>

                    <Pressable style={styles.botaoVoltar} onPress={() => router.back()}>
                        <Text style={styles.textoBotao}>← Voltar</Text>
                    </Pressable>

                </View>


                <View style={styles.cardPINFO}>
                    <Text style={styles.cardTexto}>Se as bolsas elétricas ficarem excessivamente carregadas, {"\n"}
                        Raichu finca sua cauda no chão e descarrega a energia.{"\n"}
                        Manchas de solo queimado podem ser encontradas perto do ninho deste Pokémon.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c42222',
        paddingVertical: 20,
        alignItems: 'center',
    },
    pokedex: {
        backgroundColor: 'transparent',
        marginBottom: 20,
    },
    pokedexTexto: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: 'monospace',
    },
    cardsContainer: {
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 15,
        alignItems: 'flex-start',
    },
    colunaEsquerda: {
        flexDirection: 'column',
        gap: 10,
        width: 150,
    },
    cardP: {
        backgroundColor: '#070303',
        width: 150,
        height: 150,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardPINFO: {
        backgroundColor: '#070303',
        width: 180,
        height: 400,
        padding: 20,
        borderRadius: 2,
        justifyContent: 'flex-start',
    },
    pokeico: {
        width: 150,
        height: 150,
    },
    cardTexto: {
        color: '#ffffff',
        fontFamily: 'monospace',
        fontSize: 17,
    },
    botao: {
        backgroundColor: '#6d1515',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#ffffff',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'monospace',
    },
    botaoVoltar: {
        backgroundColor: '#6d1515',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
});