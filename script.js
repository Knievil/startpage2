function fetchImage() {
        fetch("https://cataas.com/cat", {
          method: "GET",
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": "https://cataas.com/cat",
          },
        })
          .then((response) => response.blob())
          .then((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            const imageElement = document.createElement("img");
            imageElement.src = imageUrl;
            const container = document.getElementById("image-container");
            container.appendChild(imageElement);      
            const button = document.getElementById('fetch-image-button');
          })
          .catch((error) => console.error(error));
      }

      button.addEventListener("click", fetchImage);
            