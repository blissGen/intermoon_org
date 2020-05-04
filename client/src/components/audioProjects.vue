<template>
  <div class="audios">
    <ul
      :style="audioDisplay"
      v-for="audio in audios.slice().reverse()"
      :key="audio.artistName"
    >
      <a target="_blank" rel="noopener noreferrer" :href="audio.link">
        <img
          :style="resizeImage"
          :src="audio.image"
          :title="audio.artistName + ' - ' + audio.projectName"
        />
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "audios",
  data: function() {
    return {
      styleObject01: {
        fontSize: "30px",
        fontWeight: "lighter"
      },
      audioDisplay: {
        display: "inline-block",
        verticalAlign: "middle",
        margin: "0px",
        padding: "20px"
      },
      resizeImage: {
        width: "220px",
        height: "220px"
      },
      audios: [
        {
          artistName: "Audiopane",
          projectName: "Imaginaction",
          image: require("@/assets/audio_images/Audiopane-Imaginaction.jpg"),
          link: "https://audiopane.bandcamp.com/album/imaginaction"
        },
        {
          artistName: "5X5",
          projectName: "wwall",
          image: require("@/assets/audio_images/5X5_wwall.jpg"),
          link: "https://soundcloud.com/5x5_noise/sets/wwall"
        },
        {
          artistName: "Fugue State",
          projectName: "dress to kill",
          image: require("@/assets/audio_images/Fugue-State_dress-to-kill.jpg"),
          link: "https://soundcloud.com/the-rhinos/dress-to-kill"
        },
        {
          artistName: "Crane Song",
          projectName: "Sounds of Sleep",
          image: require("@/assets/audio_images/Crane-Song_Sounds-of-Sleep.jpg"),
          link:
            "https://open.spotify.com/artist/2FmT7TQ2nAMhahAB9CkXYr?si=k0IIla05Scixm6oJM-nMSA"
        },
        {
          artistName: "5X5",
          projectName: "Storyteller",
          image: require("@/assets/audio_images/5X5_Storyteller.jpg"),
          link: "https://soundcloud.com/5x5_noise/sets/storyteller"
        },
        {
          artistName: "Fugue State",
          projectName: "Going Home",
          image: require("@/assets/audio_images/Fugue-State_Going-Home.jpg"),
          link: "https://soundcloud.com/the-rhinos/going-home"
        },
        {
          artistName: "5X5",
          projectName: "condenser",
          image: require("@/assets/audio_images/5X5_condenser.jpg"),
          link: "https://www.youtube.com/watch?v=Htbb33UdhS8&t=13s"
        },
        {
          artistName: "Audiopane",
          projectName: "Dissimulate",
          image: require("@/assets/audio_images/Audiopane_Dissimulate.jpg"),
          link: "https://audiopane.bandcamp.com/album/dissimulate"
        },
        {
          artistName: "5X5",
          projectName: "orange juice tree",
          image: require("@/assets/audio_images/5X5_orange-juice-tree.jpg"),
          link: "https://soundcloud.com/5x5_noise/orange-juice-tree"
        },
        {
          artistName: "Audiopane",
          projectName: "Step Inside",
          image: require("@/assets/audio_images/Audiopane_Step-Inside.jpg"),
          link: "https://audiopane.bandcamp.com/album/step-inside"
        },
        {
          artistName: "Keith Blond",
          projectName: "Safe Expectations",
          image: require("@/assets/audio_images/Keith-Blond_Safe-Expectations.jpg"),
          link: "https://soundcloud.com/keithblond/safe-expectations"
        },
        {
          artistName: "Audiopane",
          projectName: "Enamored",
          image: require("@/assets/audio_images/Audiopane_Enamored.jpg"),
          link: "https://audiopane.bandcamp.com/album/enamored"
        },
        {
          artistName: "Audiopane",
          projectName: "Schizo Pel",
          image: require("@/assets/audio_images/Audiopane_Schizo-Pel.jpg"),
          link: "https://audiopane.bandcamp.com/album/schizo-pel"
        },
        {
          artistName: "5X5",
          projectName: "greenery",
          image: require("@/assets/audio_images/5X5_greenery.jpg"),
          link: "https://soundcloud.com/5x5_noise/sets/greenery"
        },
        {
          artistName: "Keith Blond",
          projectName: "In The Moment Where Everything Makes Sense",
          image: require("@/assets/audio_images/Keith-Blond_In-The-Moment-Where-Everything-Makes-Sense.jpg"),
          link:
            "https://open.spotify.com/album/3ZrFtZw6ReAjF8TNUwTnEz?si=ocR-we0GRRaJeIfY5en_5A"
        },
        {
          artistName: "Keith Blond",
          projectName: "SIMYH",
          image: require("@/assets/audio_images/Keith-Blond_SIMYH.jpg"),
          link: "https://www.youtube.com/watch?v=j-UHad26Hi8"
        },
        {
          artistName: "5X5",
          projectName: "ultra",
          image: require("@/assets/audio_images/5X5_ultra.jpg"),
          link: "https://soundcloud.com/5x5_noise/ultra"
        }
      ]
    };
  }
};
</script>
