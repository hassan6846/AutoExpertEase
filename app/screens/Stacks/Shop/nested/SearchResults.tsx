import { View, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

//library
import { Text } from "@rneui/themed"

const SearchResults = () => {
  return (
    <>
      <View style={{ width: "100%", height: 100, backgroundColor: "cyan" }}>
        <Text>Wtf</Text>
      </View>

      <ScrollView contentContainerStyle={{ alignItems: "center" }} style={styles.ResultContainer}>
        {/* Sticky header */}
  

        <ScrollView style={styles.ProductScroll}>

          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing
             elit. Voluptatibus, iure? Hic delectus numquam ratione veniam aperiam facilis sunt voluptatem laborum,
              exercitationem possimus doloremque at provident enim deleniti impedit nostrum temporibus beatae laudantium.
               Vitae consectetur perspiciatis quia quae asperiores aliquid vero consequatur eos tempore quidem. Perspiciatis 
               nam aperiam molestiae? Aspernatur quia dolores odit optio? Neque consequuntur, aperiam harum inventore placeat magni ipsa consectetur fugiat esse magnam doloremque unde quae, quod sunt suscipit. Doloremque quae perferendis a earum. Iste deserunt explicabo eius, porro nulla nisi natus molestias atque omnis ullam voluptate incidunt ratione perspiciatis nobis consectetur quasi, alias ipsum accusamus! Quibusdam qui maxime minus dolores accusantium id aspernatur praesentium dolorem at? Veritatis magni officia, molestias eligendi quas obcaecati eveniet! Quos consequuntur eaque voluptatibus fugit quo distinctio repudiandae impedit qui, rem dolor nulla, blanditiis suscipit. Odio aut soluta ipsa maiores consequatur ipsum at hic! Enim facere esse nulla libero fugit tempora, modi ea aut minus magnam quod ex quos impedit provident eos, perspiciatis dolorum dicta cumque iste doloremque natus non quae nisi repellendus! Ullam, minima cupiditate! Quia minus est molestias aliquid facilis accusantium illo maxime, quibusdam aut quam odit magnam ad, id explicabo delectus accusamus voluptas exercitationem dolorum dolore sint omnis ipsam. Rerum atque dolore explicabo alias ipsum quasi saepe veritatis ea voluptas cum. Eos dolorem ea ducimus excepturi placeat! Nesciunt error necessitatibus est magnam sint ab consequatur architecto nisi corrupti, commodi, nostrum rerum. Necessitatibus, adipisci commodi magni velit neque ex laboriosam quo labore dolores eius enim quam quos minus libero at rerum minima culpa ratione illo dignissimos totam deleniti! Voluptates perferendis similique vero ea consequatur? Ex tenetur earum quis velit aspernatur error, ullam sunt itaque, explicabo cum, voluptates magnam veritatis. Iste cupiditate quam ratione, est pariatur voluptates temporibus obcaecati illum voluptate sapiente amet a? Veniam harum, cupiditate illo assumenda repellat animi ducimus.</Text>
        </ScrollView>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  ResultContainer: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
  },
  ProductScroll: {
    width: "95%",
    flex:1,
    backgroundColor: "blue",
  },

})

export default SearchResults
