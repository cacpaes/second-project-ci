//variable to transport the locations to be marked on map;
var locations = [];

/*
funtion responsible for open the tour details section and by tourid, 
set the geographic coordinates on locations array
*/
function tourSelected(tourId) {
    //variables to get the html elements that will host the dynamic content
    var tourDetailsDiv = document.getElementById("tourDetails");
    var h2PointA = document.getElementById("h2-pointA");
    var h2PointB = document.getElementById("h2-pointB");
    var h2PointC = document.getElementById("h2-pointC");
    var pPointA = document.getElementById("p-pointA");
    var pPointB = document.getElementById("p-pointB");
    var pPointC = document.getElementById("p-pointC");
    var imgPointA = document.getElementById("img-pointA");
    var imgPointB = document.getElementById("img-pointB");
    var imgPointC = document.getElementById("img-pointC");
    var aPointA = document.getElementById("a-pointA");
    var aPointB = document.getElementById("a-pointB");
    var aPointC = document.getElementById("a-pointC"); 
    
    tourDetailsDiv.style.display='block';
    tourDetailsDiv.scrollIntoView();

    //update the html elements of Tour sectiion by tourId value
    //set the locations array that will be marked on the map 
    if (tourId == "tour1")
    {
        locations = [
            { lat: -23.556985456407368, lng: -46.6458763984729 },
            { lat: -23.544558309148307, lng: -46.643824730683605 },
            { lat: -23.550114427773106, lng: -46.64513414697759 }
        ];    
        h2PointA.innerHTML = "Itaúnas Beach, Conceição da Barra";
        h2PointB.innerHTML = "Praia dos Padres, Guarapari";
        h2PointC.innerHTML = "Praia do Bosque, São Mateus";

        pPointA.innerHTML = "In the municipality of Conceição da Barra, on the border with Bahia, is the beach of Itaúnas.It extends for 25km between the mouth of the Itaúnas River and the Riacho Doce, which separate the territory of Espírito Santo and Bahia.The beach is part of a Conservation Unit, the Itaúnas State Park, listed as a Natural Heritage Site by UNESCO.The region has several rustic and charming inns, with a lot of young people and with several options for tours to do in the region.";
        pPointB.innerHTML = "Located on the way to Rodovia do Sol, Guarapari has more than 50 beaches and you can certainly explore a good part of the Espírito Santo coast there.Praia dos Padres is one of the city's favorites and is located in the midst of coconut trees that surround the beach and make the view even more incredible.Next to the beach there are also some trails that lead to higher areas from where it is possible to have privileged views of the beach.";
        pPointC.innerHTML = "If you are one of those people who love deserted beaches and preserved nature, Praia do Bosque is your place.It is located in the municipality of São Mateus, on the northern coast of the state, which is less explored by tourists, and precisely because of this it is possible to find places as calm as Praia do Bosque.";
    
        imgPointA.src = "assets/images/tours/bixiga.jpg"; 
        imgPointB.src = "assets/images/tours/terraco_ita.jpg"; 
        imgPointC.src = "assets/images/tours/famiglia_mancini.jpg"; 

        aPointA.href = "http://www.portaldobixiga.com.br/";
        aPointB.href = "https://www.edificioitalia.com.br/";
        aPointC.href = "http://www.famigliamancini.com.br/";
    }
    else if(tourId == "tour2")
    {
        locations = [
            { lat: -23.56117795896671, lng: -46.655838987458196 },
            { lat: -23.560658526904586, lng: -46.6946764027999 },
            { lat:  -23.54929767878088, lng: -46.612906331635756}
        ];           
        h2PointA.innerHTML = "Nossa Senhora da Penha Convent Museum";
        h2PointB.innerHTML = "Reis Magos Church";
        h2PointC.innerHTML = "Domingos Martins House of Culture";

        pPointA.innerHTML = "Opened in 2000, the Museum of Nossa Senhora da Penha is located in the former house of the Pilgrims.The place displays several objects with more than 400 years of the historical collection of the Convent, are in the exhibition sacred, liturgical and clothing pieces, all narrating the daily life of the Sanctuary.";
        pPointB.innerHTML = "Completed in 1580, listed by IPHAN and recently restored, it is one of the best examples of Jesuit architecture in Brazil. The Reis Magos Church and Residence is one of the main examples of the Brazilian Jesuit architectural heritage, as it is one of the buildings that suffered less interference in the centuries that followed its construction. The architectural complex is also formed by a square and is located at 40 meters above sea level.The church boasts, on the altar, an altarpiece carved in wood of great artistic value. The church altar, built in 1701, features an altarpiece carved in wood and, in the center, a work by the painter Friar Belchior Paulo, depicting the adoration of the Magi. The painting is considered one of the first oil paintings in Brazil, since Jesuit painting in Brazil begins in 1587, with the arrival of Friar Belchior Paulo.";
        pPointC.innerHTML = "The House of Culture and Historical Museum has a collection of photographs, documents, objects and furniture that belonged to immigrants and descendants of Germans, Pomeranians and Italians who colonized the municipality.In addition to the museum, the space always offers exhibitions of varied themes and acts as a tourist information point.";
        
        imgPointA.src = "assets/images/tours/masp.jpg"; 
        imgPointB.src = "assets/images/tours/tomie_ohtake.jpg"; 
        imgPointC.src = "assets/images/tours/museu_imigracao.jpg"; 

        aPointA.href = "https://masp.org.br/";
        aPointB.href = "https://www.institutotomieohtake.org.br/";
        aPointC.href = "https://museudaimigracao.org.br/";        
    }
    else if(tourId == "tour3")
    {
        locations = [
            { lat: -23.587327692598006, lng: -46.655691683582624 },
            { lat: -23.533938300775326, lng: -46.639746945276805 },
            { lat: -23.581564931258065, lng: -46.66705397411149 }
        ]; 

        h2PointA.innerHTML = "Valley Botanist";
        h2PointB.innerHTML = "Sônia Cabral";
        h2PointC.innerHTML = "Rua da Lama";

        pPointA.innerHTML = "With 33 hectares of green area, the Vale Botanical Park is located in the belt of the Tubarão Complex. It is a leisure space and, mainly, a conservation unit of the Atlantic Forest, one of the most important forests in the country.Those who visit the place have the opportunity to visit the first permanent Sensory Garden in Espírito Santo, a structure that aims to stimulate the five senses and promote a different way of interacting with nature.More than 140 species of trees, such as pau-brasil, jacaranda and ipê, as well as wild animals such as caticocos, skunks, marmosets and several species of birds can be seen on five ecological trails.";
        pPointB.innerHTML = "It was built in 1606 and initially housed the old Church of Nossa Senhora da Misericórdia. In 1912, the building was remodeled by the architect André Carloni, during the government of Jerônimo Monteiro (1908-1912), in order to build a seat for the Legislative Assembly. This new space is part of the Cultural Heritage Preservation and Revitalization Program, which is part of the State Government's Strategic Plan of Action and Cultural Policy, developed by the Secretary of State for Culture (Secult).The name is a tribute to the pianist Sônia Cabral, who founded the Espírito Santo Philharmonic Orchestra, today the Symphony Orchestra. The pianist was also director of the Faculty of Music of Espírito Santo (Fames) and contributed to the development of culture and – mainly – of music in the State.";
        pPointC.innerHTML = "Frequented since 1980, mostly by professors and students from UFES (Federal University of Espírito Santo), Rua da Lama is located on Avenida Anísio Fernandes Coelho, in Jardim da Penha, and received this nickname because, before being paved, the street covered in mud on rainy days. The street still houses one of the main bohemian strongholds of Vitória, bringing together in a single street, several options of bars and restaurants. This is the most democratic street in the state! The success of this street dates back to the 1980s when the place was not yet paved, and the practice of meeting any day of the week is not new. The neighborhood was bucolic and without many buildings, and around here you could find a large number of UFES class-killer students.";
        
        imgPointA.src = "assets/images/tours/ibirapuera.jpg"; 
        imgPointB.src = "assets/images/tours/saopaulo_hall.jpg"; 
        imgPointC.src = "assets/images/tours/skye_bar.jpg"; 

        aPointA.href = "https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/parques/regiao_sul/index.php?p=14062";
        aPointB.href = "http://www.salasaopaulo.art.br/home.aspx";
        aPointC.href = "https://www.hotelunique.com/en/restaurant-bar/skye/";          
    }
    else if(tourId == "tour4")
    {
        locations = [
            { lat: -23.541612431424202, lng: -46.629461104799795 },
            { lat: -23.591206545074716, lng: -46.68975778945486 },
            { lat: -23.561011814622862, lng: -46.65653011829159 }
        ]; 

        h2PointA.innerHTML = "Vila Velha";
        h2PointB.innerHTML = "Serra";
        h2PointC.innerHTML = "Capixaba Handicraft Store";

        pPointA.innerHTML = "Crossing the Third Bridge, we arrive at the Penha Convent. The souvenir shop at the top of the mountain, and other shops near the entrance proton, sell the most varied religious products.In Vila Velha it is also possible to find the most varied items of Espírito Santo, such as clothes, products from the cinnamon-green culture and even artisanal gastronomic products.";
        pPointB.innerHTML = "Tourists can also find handicrafts in the municipality of Serra. On the edge of Jacaraípe is the Associação de Artesãos da Serra (Asas). Come meet the Holy Spirit? Prestige capixaba crafts take beautiful memories home!";
        pPointC.innerHTML = "On weekends, Praça dos Namorados hosts the traditional Feira de Artesanato Artes na Praça, which offers handicrafts and typical foods, in addition to artistic shows. The objective of the Artes na Praça program is to value the work of artisans in Espírito Santo and encourage local production, providing several entrepreneurs in Greater Vitória with the opportunity to sell their products.Today, the Artes na Praça program has the participation of around 200 authorized exhibitors, working in the areas of food, handicrafts, handicrafts, manufactured products and fun toys.";
        
        imgPointA.src = "assets/images/tours/mercado.jpg"; 
        imgPointB.src = "assets/images/tours/jk_iguatemi.jpg"; 
        imgPointC.src = "assets/images/tours/paulista.jpg"; 

        aPointA.href = "https://portaldomercadao.com.br/";
        aPointB.href = "https://iguatemi.com.br/jkiguatemi/";
    }

    //reinit the map
    initMap();
}

/*
google init function. It was changed to get dinamically the array of locations to be marked
(passed by tourSelected function) and sets the center point of the map to the 2 index of locations
array, centralizing the map exactly where the user is going to see.
*/
function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: locations[2]
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });            
}