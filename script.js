
const recipes = [
  {
    name: 'Flan Perfect Cake',
    author: 'Romy Espino',
    ingredients: ['Eggs', 'Milk', 'Sugar'],
    image: 'image/flanperfect.png',
    servings: 6,
    prepTime: '1 hr',
    tags: ['Creamy', 'Classic']
  },
  {
    name: 'Pineapple Upside Down Cake',
    author: 'Romy Espino',
    ingredients: ['Pineapple', 'Flour', 'Sugar'],
    image: 'image/pineappleupsidedown.png',
    servings: 8,
    prepTime: '1 hr',
    tags: ['Tropical', 'Classic']
  },
  {
    name: 'Carrot Mousse Cake Delight',  
    author: 'Romy Espino',
    ingredients: ['Carrots', 'Flour', 'Sugar'],
    image: 'image/carrotmousecake.png',
    servings: 8,
    prepTime: '1 hr',
    tags: ['Spiced', 'Classic']
  },
    {
      name: 'Vanilla Dream Cake',
      author: 'Berry Minelli',
      ingredients: ['Flour','Eggs','Vanilla'],
      image: 'image/vanilladream.png',
      servings: 6,
      prepTime: '30 mins',
      tags: ['Classic', 'Quick']
  },
  {
    name: 'Purple Yam Flan Cake',
    author: 'Romy Espino',
    ingredients: ['Purple Yam', 'Eggs', 'Sugar'],
    image: 'image/purpleyamflan.png',
    servings: 6,
    prepTime: '1 hr',
    tags: ['Creamy', 'Classic']
  },
    {
      name: 'Strawberry Shortcake',
      author: 'Nigella Stragetella',
      ingredients: ['Strawberries','Cream','Biscuits'],
      image: 'image/strawberryshort.png',
      servings: 4,
      prepTime: '20 mins',
      tags: ['Fruity', 'Classic']
    },
    {
      name: 'Lemon Tart Bliss',
      author: 'Berry Minelli',
      ingredients: ['Lemon', 'Sugar', 'Butter'],
      image: 'image/lemontartbliss.png',
      servings: 6,
      prepTime: '35 mins',
      tags: ['Tangy', 'Quick']
    },
    {
      name: 'Coconut Dream Pie',
      author: 'Nigella Stragetella',
      ingredients: ['Coconut', 'Cream', 'Pastry'],
      image: 'image/coconutdream.png',
      servings: 6,
      prepTime: '50 mins',
      tags: ['Tropical', 'Creamy']
    },
    {
      name: 'Banana Bread Delight',
      author: 'Oliver Jamesson',
      ingredients: ['Bananas', 'Flour', 'Honey'],
      image: 'image/bananabread.png',
      servings: 8,
      prepTime: '55 mins',
      tags: ['Healthy', 'Classic']
    },
    {
      name: 'Cherry Cheesecake',
      author: 'Berry Minelli',
      ingredients: ['Cherries', 'Cheese', 'Crust'],
      image: 'image/cherrycheese.png',
      servings: 6,
      prepTime: '40 mins',
      tags: ['Sweet', 'Chilled']
    },
    {
      name: 'Peach Cobbler',
      author: 'Nigella Stragetella',
      ingredients: ['Peaches', 'Butter', 'Cinnamon'],
      image: 'image/peachcobbler.png',
      servings: 6,
      prepTime: '50 mins',
      tags: ['Warm', 'Classic']
    },
    {
      name: 'Apple Crumble',
      author: 'Oliver Jamesson',
      ingredients: ['Apples', 'Oats', 'Sugar'],
      image: 'image/applecrumble.png',
      servings: 5,
      prepTime: '45 mins',
      tags: ['Comfort', 'Quick']
    },
    {
      name: 'Mango Mousse',
      author: 'Berry Minelli',
      ingredients: ['Mango', 'Cream', 'Gelatin'],
      image: 'image/mangomousse.png',
      servings: 4,
      prepTime: '30 mins',
      tags: ['Fruity', 'Light']
    },
    {
      name: 'Blueberry Muffins Deluxe',
      author: 'Nigella Stragetella',
      ingredients: ['Blueberries', 'Flour', 'Milk'],
      image: 'image/blueberrymuffins.png',
      servings: 12,
      prepTime: '25 mins',
      tags: ['Baked', 'Berry']
    },
    {
      name: 'Tiramisu Deluxe',
      author: 'Oliver Jamesson',
      ingredients: ['Mascarpone', 'Coffee', 'Cocoa'],
      image: 'image/tiramisu.png',
      servings: 6,
      prepTime: '1 hr',
      tags: ['Italian', 'Chilled']
    },
    {
      name: 'Chocolate Combo Lava Cake',
      author: 'Romy Espino',
      ingredients: ['Chocolate', 'Eggs', 'Flour'],
      image: 'image/cholatecombilava.png',
      servings: 4,
      prepTime: '30 mins',
      tags: ['Rich', 'Chocolate']
    },
    
    ];
  
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [], filteredRecipes = [...recipes];
    
  function renderRecipes(list) {
    const loggedIn = localStorage.getItem("user") === "true" || sessionStorage.getItem("user") === "true";
    document.getElementById("recipeGrid").innerHTML = list.map(recipe => {
      return `
        <div class="card">
          <div class="card-img" onclick="${loggedIn ? `openModal('${recipe.name}')` : `redirectToLogin()`}">
            <img src="${recipe.image}" alt="${recipe.name}" />
          </div>
          ${loggedIn ? `<div class="info">
            <h3>${recipe.name}</h3>
            <p>${recipe.author}</p>
            <div class="card-rating">${getRatingStars(recipe.name)}</div>
          </div>` : ''}
        </div>
      `;
    }).join("");
  }
  function getRatingStars(name) {
    const ratings = JSON.parse(localStorage.getItem("ratings")) || {};
    const stars = ratings[name] || 0;
    return (
      '⭐'.repeat(stars).split('').map(s => `<span>${s}</span>`).join('') +
      '☆'.repeat(5 - stars).split('').map(s => `<span>${s}</span>`).join('')
    );
  }
  
    function logout() {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      window.location.reload(); // or redirect to login
    }
    
    function redirectToLogin() {
      alert("Please login to view full recipe details.");
      window.location.href = "login.html";
    }
    
    
    function openModal(name) {
      console.log('Modal triggered for:', name);
      const recipe = recipes.find(r => r.name === name);
      if (!recipe) return;
      
      document.getElementById('modalBody').innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="modal-img">
        <h2>${recipe.name}</h2>
        <p><strong>Author:</strong> ${recipe.author}</p>
        <p><strong>Tags:</strong> ${recipe.tags?.join(', ') || 'None'}</p>
        <p><strong>Servings:</strong> ${recipe.servings || 'N/A'}</p>
        <p><strong>Prep Time:</strong> ${recipe.prepTime || 'N/A'}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <div class='modal-heart'>
          <span class='heart' onclick="toggleFavorite(event, '${recipe.name}')">${isFavorite(recipe.name) ? '❤️' : '🤍'}</span>
        </div>`;
      document.getElementById("modal").style.display = "flex";
    }
    
    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }
    
    function toggleFavorite(e, name) {
      e.stopPropagation();
      const idx = favorites.findIndex(r => r.name === name);
      if (idx !== -1) favorites.splice(idx, 1);
      else {
        const recipe = recipes.find(r => r.name === name);
        if (recipe) favorites.push(recipe);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
      renderRecipes(filteredRecipes);
      openModal(name);
    }
    
    function isFavorite(name) { return favorites.some(r => r.name === name); }
    
    function searchRecipes() {
      const query = document.getElementById("searchBox").value.toLowerCase();
      filteredRecipes = recipes.filter(r =>
        r.name.toLowerCase().includes(query) ||
        r.author.toLowerCase().includes(query) ||
        r.ingredients.some(i => i.toLowerCase().includes(query))
      );
      renderRecipes(filteredRecipes);
    }

    function rateRecipe(name, stars) {
      const ratings = JSON.parse(localStorage.getItem("ratings")) || {};
      ratings[name] = stars;
      localStorage.setItem("ratings", JSON.stringify(ratings));
      alert(`You rated ${name} ${stars} stars!`);
    }
    
    function submitComment(name) {
      const input = document.getElementById("commentInput");
      const text = input.value.trim();
      if (!text) return;
    
      const allComments = JSON.parse(localStorage.getItem("comments")) || {};
      allComments[name] = allComments[name] || [];
      allComments[name].push(text);
      localStorage.setItem("comments", JSON.stringify(allComments));
      input.value = "";
      displayComments(name);
    }
    
    function displayComments(name) {
      const comments = JSON.parse(localStorage.getItem("comments")) || {};
      const list = document.getElementById("commentList");
      const entries = comments[name] || [];
    
      list.innerHTML = entries.map(c => `<p>💬 ${c}</p>`).join("");
    }
    
    // Extend openModal with comments and rating
    function openModal(name) {
      console.log('Modal triggered for:', name);
      const recipe = recipes.find(r => r.name === name);
      if (!recipe) return;
    
      document.getElementById('modalBody').innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="modal-img">
        <h2>${recipe.name}</h2>
        <p><strong>Author:</strong> ${recipe.author}</p>
        <p><strong>Tags:</strong> ${recipe.tags?.join(', ') || 'None'}</p>
        <p><strong>Servings:</strong> ${recipe.servings || 'N/A'}</p>
        <p><strong>Prep Time:</strong> ${recipe.prepTime || 'N/A'}</p>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <div class='modal-heart'>
          <span class='heart' onclick="toggleFavorite(event, '${recipe.name}')">${isFavorite(recipe.name) ? '❤️' : '🤍'}</span>
        </div>
        <div class="rating">
          <span onclick="rateRecipe('${recipe.name}', 1)">⭐</span>
          <span onclick="rateRecipe('${recipe.name}', 2)">⭐</span>
          <span onclick="rateRecipe('${recipe.name}', 3)">⭐</span>
          <span onclick="rateRecipe('${recipe.name}', 4)">⭐</span>
          <span onclick="rateRecipe('${recipe.name}', 5)">⭐</span>
        </div>
        <textarea placeholder="Leave a comment and Rate my Cake..." id="commentInput"></textarea>
        <button onclick="submitComment('${recipe.name}')">Post Comment</button>
        <div id="commentList"></div>`;
    
      document.getElementById("modal").style.display = "flex";
      displayComments(name);
    }    
    
    function filterByAuthor() {
      const author = document.getElementById("authorFilter").value;
      const query = document.getElementById("searchBox").value.toLowerCase();
      filteredRecipes = recipes.filter(r => {
        const matchAuthor = !author || r.author === author;
        const matchText = r.name.toLowerCase().includes(query) || r.ingredients.some(i => i.toLowerCase().includes(query));
        return matchAuthor && matchText;
      });
      renderRecipes(filteredRecipes);
    }
    
    function toggleDarkMode() { document.body.classList.toggle("dark"); }
    
    function viewFavorites() {
      filteredRecipes = [...favorites];
      renderRecipes(filteredRecipes);
    }
    
    function viewAllRecipes() {
      filteredRecipes = [...recipes];
      renderRecipes(filteredRecipes);
    }
    
    function populateAuthors() {
      const dropdown = document.getElementById("authorFilter");
      const uniqueAuthors = [...new Set(recipes.map(r => r.author))];
      uniqueAuthors.forEach(author => {
        const option = document.createElement("option");
        option.value = author;
        option.textContent = author;
        dropdown.appendChild(option);
      });
    }    
    
    function updateUserStatus() {
      const user = JSON.parse(localStorage.getItem("userProfile"));
      const loggedIn = localStorage.getItem("user") === "true" || sessionStorage.getItem("user") === "true";
      const status = document.getElementById("userStatus");
      if (loggedIn && user) {
        status.innerHTML = user.avatar
          ? `<img src="${user.avatar}" class="avatar"> ${user.username}`
          : `🧑‍🍳 ${user.username}`;
      } else {
        status.textContent = "";
      }
    }

    function getTopRatedRecipes(limit = 3) {
      const ratings = JSON.parse(localStorage.getItem("ratings")) || {};
      const scored = recipes
        .map(r => ({ ...r, stars: ratings[r.name] || 0 }))
        .sort((a, b) => b.stars - a.stars)
        .filter(r => r.stars > 0)
        .slice(0, limit);
      return scored;
    }
    
    function showFeaturedSpotlight() {
      const ratings = JSON.parse(localStorage.getItem("ratings")) || {};
      const topRated = recipes
        .map(r => ({ ...r, stars: ratings[r.name] || 0 }))
        .filter(r => r.stars >= 4)
        .sort((a, b) => b.stars - a.stars)
        .slice(0, 5);
    
      const container = document.getElementById("featuredCake");
      if (!container || topRated.length === 0) {
        container.innerHTML = "<p>No 4+ star rated cakes yet!</p>";
        return;
      }
    
      let current = 0;
    
      function updateSpotlight() {
        const r = topRated[current];
    
        const newCard = document.createElement("div");
        newCard.className = "spotlight-card fade-in";
        newCard.innerHTML = `
          <img src="${r.image}" alt="${r.name}">
          <h3>${r.name}</h3>
          <p>⭐ ${r.stars} — ${r.author}</p>
        `;
    
        container.innerHTML = "";
        container.appendChild(newCard);
    
        current = (current + 1) % topRated.length;
      }
    
      updateSpotlight();
      setInterval(updateSpotlight, 4000);
    }
    
    document.addEventListener("DOMContentLoaded", () => {
      populateAuthors();
      renderRecipes(recipes);
      updateUserStatus();
      showFeaturedSpotlight();
    });
    
    

    function redirectToLogin() {
      window.location.href = "login.html";
    }
    
