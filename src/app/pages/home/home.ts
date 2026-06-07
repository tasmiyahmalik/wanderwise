import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  selectedPlace: any = null;

  showPlace(place: string) {

    const data: any = {
      paris: {
        title: "Paris, France",
        places: "Eiffel Tower, Louvre Museum, Notre-Dame Cathedral",
        history: "Paris is known for art, fashion, culture and history. It is one of the most visited cities in the world.",
        cost: "$1200 - $2000"
      },

      switzerland: {
        title: "Switzerland",
        places: "Zurich, Lucerne, Interlaken, Alps",
        history: "Switzerland is famous for mountains, lakes, chocolates and scenic beauty.",
        cost: "$1500 - $2500"
      },

      japan: {
        title: "Japan",
        places: "Tokyo, Kyoto, Osaka, Mount Fuji",
        history: "Japan mixes ancient tradition with modern technology and culture.",
        cost: "$1800 - $3000"
      },

      greece: {
        title: "Greece",
        places: "Athens, Santorini, Mykonos",
        history: "Greece is the birthplace of democracy and rich ancient civilization.",
        cost: "$1400 - $2600"
      },

      germany: {
        title: "Germany",
        places: "Berlin, Munich, Hamburg",
        history: "Germany is known for history, castles and engineering.",
        cost: "$1300 - $2400"
      },

      finland: {
        title: "Finland",
        places: "Helsinki, Lapland",
        history: "Finland is known for Northern Lights and natural beauty.",
        cost: "$1600 - $2800"
      },

      ireland: {
        title: "Ireland",
        places: "Dublin, Galway, Cliffs of Moher",
        history: "Ireland is famous for green landscapes and castles.",
        cost: "$1400 - $2400"
      },

      maldives: {
        title: "Maldives",
        places: "Male, Maafushi",
        history: "Maldives is known for beaches, luxury resorts and clear water.",
        cost: "$2000 - $4000"
      },

      turkey: {
        title: "Turkey",
        places: "Istanbul, Cappadocia",
        history: "Turkey connects Europe and Asia with rich culture and history.",
        cost: "$1200 - $2200"
      }
    };

    this.selectedPlace = data[place];
  }

  bookTrip() {
    alert("Trip booked successfully!");
  }
}