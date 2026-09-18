/* Δεδομένα αξιοθεάτων για τη σελίδα Nearby Attractions.
   Η σειρά των αξιοθέατων ακολουθεί τη σειρά των στάσεων
   που εμφανίζονται στο BusInfo. */

import imgAnthoupoli from "../assets/images/attractions/anthoupoli.png";
import imgPeristeri from "../assets/images/attractions/peristeri.png";
import imgAgAntonios from "../assets/images/attractions/agios-antonios.png";
import imgSepolia from "../assets/images/attractions/sepolia.png";
import imgAttiki from "../assets/images/attractions/attiki.png";
import imgAthensRailway from "../assets/images/attractions/athens-railway.png";
import imgMetaxourgio from "../assets/images/attractions/metaxourgio.png";
import imgOmonoia from "../assets/images/attractions/omonoia.png";
import imgPanepistimio from "../assets/images/attractions/panepistimio.png";
import imgParliament from "../assets/images/attractions/parliament.png";
import imgAcropolis from "../assets/images/attractions/acropolis.png";
import imgArt from "../assets/images/attractions/art.png";
import imgNeosKosmos from "../assets/images/attractions/neos-kosmos.png";
import imgAgiosIoannis from "../assets/images/attractions/agios-ioannis.png";
import imgDafni from "../assets/images/attractions/dafni.png";
import imgIlioupoli from "../assets/images/attractions/ilioupoli.png";
import imgAlimosMarina from "../assets/images/attractions/alimos-marina.png";
import imgElliniko from "../assets/images/attractions/elliniko.png";

const attractions = [
    {
        title: "Academy of Athens",
        description: "The Academy of Athens is one of the most impressive neoclassical buildings in the city. It forms part of the famous Athenian Trilogy together with the University of Athens and the National Library. This area is important for passengers because it connects architecture, education and the cultural history of modern Athens.",
        image: imgPanepistimio
    },
    {
        title: "Hellenic Parliament",
        description: "The Hellenic Parliament is one of the most important buildings in Greece and is located next to Syntagma Square. It is closely connected with the country’s political history and modern democratic life. In front of the building, visitors can also see the Monument of the Unknown Soldier and the ceremonial guards.",
        image: imgParliament
    },
    {
        title: "Acropolis & Parthenon",
        description: "The Acropolis is the most famous ancient landmark of Athens and one of the strongest symbols of Greek civilization. The Parthenon, located on the sacred rock, is known worldwide for its historical and architectural significance. This stop offers passengers access to one of the most important cultural areas of the city.",
        image: imgAcropolis
    },
    {
        title: "National Museum of Contemporary Art",
        description: "The National Museum of Contemporary Art, also known as EMST, is located near Syngrou-Fix. It is housed in the former Fix brewery building, combining modern culture with an important example of urban redevelopment. The museum presents contemporary art and gives passengers a different cultural experience from the ancient monuments of Athens.",
        image: imgArt
    },
    {
        title: "Neos Kosmos Local Area",
        description: "Neos Kosmos is a residential and urban area close to the center of Athens. It combines local streets, cafes and everyday neighborhood life with easy access to cultural areas nearby. This stop shows how central Athens connects with quieter residential districts along the route.",
        image: imgNeosKosmos
    },
    {
        title: "Agios Ioannis Church",
        description: "Agios Ioannis Church is a local landmark that gives the stop its name. The surrounding area has a neighborhood character, with homes, shops and local movement. It is useful for passengers as a point of orientation while the route continues from the center toward the southern parts of Athens.",
        image: imgAgiosIoannis
    },
    {
        title: "Dafni Square",
        description: "Dafni Square is a local meeting point with cafes, shops and pedestrian activity. The area connects residential life with everyday commercial movement and public transport. For passengers, it offers a view of a typical southern Athens neighborhood with a more relaxed urban rhythm.",
        image: imgDafni
    },
    {
        title: "Ilioupoli Central Square",
        description: "Ilioupoli Central Square is one of the main local points of the area, surrounded by cafes, shops and residential streets. The neighborhood is known for its connection with the southern suburbs of Athens and its everyday city life. This stop gives passengers a sense of the route moving further away from the historic center.",
        image: imgIlioupoli
    },
    {
        title: "Alimos Marina",
        description: "Alimos Marina is one of the most recognizable coastal points near the southern part of Athens. It is associated with sea views, boats and walking routes along the Athens Riviera. This stop gives passengers the feeling that the route is approaching the coastline and the more open seaside areas of the city.",
        image: imgAlimosMarina
    },
    {
        title: "Elliniko Coastal Area",
        description: "Elliniko is connected with the southern coastline of Athens and the wider development of the Athens Riviera. The area combines access to the sea, modern urban development and links to the southern suburbs. As the final part of the route, it gives passengers a transition from the city center to the coastal side of Athens.",
        image: imgElliniko
    },
    {
        title: "Anthoupoli Local Area",
        description: "Anthoupoli is a quiet residential area that marks the beginning of the route. It gives passengers a first view of everyday life outside the busy historic center of Athens, with local streets, small shops and neighborhood activity. This stop works as a calm starting point before the bus moves closer to the central parts of the city.",
        image: imgAnthoupoli
    },
    {
        title: "Peristeri Square",
        description: "Peristeri Square is one of the main urban points of the area, surrounded by cafes, shops and pedestrian streets. It represents the modern everyday life of western Athens, where local residents meet, walk and spend time. For passengers, it offers a view of a lively neighborhood before the route continues toward the city center.",
        image: imgPeristeri
    },
    {
        title: "Agios Antonios Church",
        description: "Agios Antonios Church is a recognizable local landmark and an important reference point for the surrounding neighborhood. The area combines residential streets, local shops and public transport activity. It is not a major tourist monument, but it helps passengers understand the local character of the route.",
        image: imgAgAntonios
    },
    {
        title: "Sepolia Neighborhood",
        description: "Sepolia is a traditional Athens neighborhood with a strong local identity. The area is mostly residential, showing a more everyday and authentic side of the city away from the main tourist routes. Through this stop, passengers can observe the transition from western Athens toward the more central districts.",
        image: imgSepolia
    },
    {
        title: "Attiki Square",
        description: "Attiki Square is a busy urban point connected with transport, shops and local movement. The area has a strong city atmosphere, with many people using it as a connection point between different parts of Athens. It gives passengers a sense of the dense and active character of the capital.",
        image: imgAttiki
    },
    {
        title: "Athens Railway Station",
        description: "Athens Railway Station, also known as Larissa Station, is one of the city’s most important transport hubs. It connects Athens with other regions of Greece and plays a key role in long-distance travel. For passengers, this stop highlights how the bus route connects with larger transport networks in the city.",
        image: imgAthensRailway
    },
    {
        title: "Metaxourgio Cultural Area",
        description: "Metaxourgio is an urban district known for its mix of older buildings, small theaters, art spaces and local cafes. The area has developed a creative character while still keeping parts of its older city identity. It is an interesting stop because it shows the connection between history, urban change and contemporary culture.",
        image: imgMetaxourgio
    },
    {
        title: "Omonoia Square",
        description: "Omonoia Square is one of the most central and historic squares of Athens. It is surrounded by major roads, hotels, shops and public transport connections. The square has changed many times over the years and remains an important meeting and movement point in the city center.",
        image: imgOmonoia
    }
];

export default attractions;