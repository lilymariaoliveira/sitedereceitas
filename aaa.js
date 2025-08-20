<script>
        // Dados das receitas
        const recipes = {
            1: {
                title: "Panquecas Perfeitas",
                time: "25 min",
                difficulty: "Fácil",
                servings: "4 porções",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81c0e697-f2e2-4631-bc6e-e309020f548a.png",
                ingredients: [
                    "1 xícara de farinha de trigo",
                    "1 colher de sopa de açúcar",
                    "2 colheres de chá de fermento em pó",
                    "1/2 colher de chá de sal",
                    "1 ovo",
                    "1 xícara de leite",
                    "2 colheres de sopa de manteiga derretida",
                    "1 colher de chá de essência de baunilha"
                ],
                instructions: [
                    "Misture os ingredientes secos em uma tigela grande.",
                    "Noutra tigela, bata o ovo, leite, manteiga e baunilha.",
                    "Despeje a mistura líquida sobre os secos e misture até incorporar.",
                    "Aqueça uma frigideira antiaderente em fogo médio.",
                    "Despeje pequenas porções da massa na frigideira.",
                    "Vire quando aparecerem bolhas na superfície.",
                    "Sirva quente com mel, frutas ou maple syrup."
                ],
                tips: "Para panquecas mais fofas, não misture demais a massa. Alguns grumos são normais."
            },
            2: {
                title: "Pesto Caseiro",
                time: "40 min",
                difficulty: "Médio",
                servings: "4 porções",
                image: "https://placehold.co/800x500",
                ingredients: [
                    "2 xícaras de folhas de manjericão fresco",
                    "1/2 xícara de queijo parmesão ralado",
                    "1/2 xícara de azeite de oliva",
                    "1/3 xícara de pinoli (ou nozes)",
                    "3 dentes de alho",
                    "Sal e pimenta a gosto"
                ],
                instructions: [
                    "Lave bem as folhas de manjericão e seque com papel toalha.",
                    "No processador de alimentos, adicione o alho e as nozes, processe até triturar.",
                    "Adicione o manjericão e processe novamente.",
                    "Com o processador ligado, adicione o azeite em fio.",
                    "Adicione o queijo parmesão e tempere com sal e pimenta.",
                    "Misture o pesto ao macarrão cozido al dente.",
                    "Se desejar, adicione um pouco da água do cozimento do macarrão para ajustar a consistência."
                ],
                tips: "Para preservar a cor vibrante do pesto, adicione um pouco de suco de limão. Guarde na geladeira com uma camada de azeite por cima."
            },
            3: {
                title: "Brownie Irresistível",
                time: "50 min",
                difficulty: "Fácil",
                servings: "9 porções",
                image: "https://placehold.co/800x500",
                ingredients: [
                    "200g de chocolate meio amargo",
                    "150g de manteiga sem sal",
                    "200g de açúcar",
                    "3 ovos grandes",
                    "100g de farinha de trigo",
                    "30g de cacau em pó",
                    "1/2 colher de chá de sal",
                    "100g de nozes picadas (opcional)"
                ],
                instructions: [
                    "Pré-aqueça o forno a 180°C e unte uma forma quadrada.",
                    "Derreta o chocolate e a manteiga em banho-maria, mexendo até ficar homogêneo.",
                    "Retire do fogo e adicione o açúcar, misturando bem.",
                    "Adicione os ovos um a um, batendo bem após cada adição.",
                    "Peneire a farinha, o cacau e o sal sobre a mistura e incorpore delicadamente.",
                    "Adicione as nozes se desejar.",
                    "Despeje na forma e asse por 25-30 minutos.",
                    "Deixe esfriar antes de cortar."
                ],
                tips: "Para um brownie mais úmido, retire do forno quando o palito sair com algumas migalhas úmidas. Para mais firmeza, asse até o palito sair limpo."
            }
        };

        // Abrir modal com a receita clicada
        document.querySelectorAll('.view-recipe').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const recipeId = this.getAttribute('data-recipe');
                const recipe = recipes[recipeId];
                
                if (recipe) {
                    document.getElementById('modal-recipe-title').textContent = recipe.title;
                    document.getElementById('modal-recipe-time').textContent = recipe.time;
                    document.getElementById('modal-recipe-difficulty').textContent = recipe.difficulty;
                    document.getElementById('modal-recipe-servings').textContent = recipe.servings;
                    document.getElementById('modal-recipe-tips').textContent = recipe.tips;
                    document.querySelector('.modal-recipe-image').src = recipe.image;
                    
                    const ingredientsList = document.getElementById('modal-recipe-ingredients');
                    ingredientsList.innerHTML = '';
                    recipe.ingredients.forEach(ingredient => {
                        const li = document.createElement('li');
                        li.textContent = ingredient;
                        ingredientsList.appendChild(li);
                    });<script>
        // Dados das receitas
        const recipes = {
            1: {
                title: "Panquecas Perfeitas",
                time: "25 min",
                difficulty: "Fácil",
                servings: "4 porções",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/81c0e697-f2e2-4631-bc6e-e309020f548a.png",
                ingredients: [
                    "1 xícara de farinha de trigo",
                    "1 colher de sopa de açúcar",
                    "2 colheres de chá de fermento em pó",
                    "1/2 colher de chá de sal",
                    "1 ovo",
                    "1 xícara de leite",
                    "2 colheres de sopa de manteiga derretida",
                    "1 colher de chá de essência de baunilha"
                ],
                instructions: [
                    "Misture os ingredientes secos em uma tigela grande.",
                    "Noutra tigela, bata o ovo, leite, manteiga e baunilha.",
                    "Despeje a mistura líquida sobre os secos e misture até incorporar.",
                    "Aqueça uma frigideira antiaderente em fogo médio.",
                    "Despeje pequenas porções da massa na frigideira.",
                    "Vire quando aparecerem bolhas na superfície.",
                    "Sirva quente com mel, frutas ou maple syrup."
                ],
                tips: "Para panquecas mais fofas, não misture demais a massa. Alguns grumos são normais."
            },
            2: {
                title: "Pesto Caseiro",
                time: "40 min",
                difficulty: "Médio",
                servings: "4 porções",
                image: "https://placehold.co/800x500",
                ingredients: [
                    "2 xícaras de folhas de manjericão fresco",
                    "1/2 xícara de queijo parmesão ralado",
                    "1/2 xícara de azeite de oliva",
                    "1/3 xícara de pinoli (ou nozes)",
                    "3 dentes de alho",
                    "Sal e pimenta a gosto"
                ],
                instructions: [
                    "Lave bem as folhas de manjericão e seque com papel toalha.",
                    "No processador de alimentos, adicione o alho e as nozes, processe até triturar.",
                    "Adicione o manjericão e processe novamente.",
                    "Com o processador ligado, adicione o azeite em fio.",
                    "Adicione o queijo parmesão e tempere com sal e pimenta.",
                    "Misture o pesto ao macarrão cozido al dente.",
                    "Se desejar, adicione um pouco da água do cozimento do macarrão para ajustar a consistência."
                ],
                tips: "Para preservar a cor vibrante do pesto, adicione um pouco de suco de limão. Guarde na geladeira com uma camada de azeite por cima."
            },
            3: {
                title: "Brownie Irresistível",
                time: "50 min",
                difficulty: "Fácil",
                servings: "9 porções",
                image: "https://placehold.co/800x500",
                ingredients: [
                    "200g de chocolate meio amargo",
                    "150g de manteiga sem sal",
                    "200g de açúcar",
                    "3 ovos grandes",
                    "100g de farinha de trigo",
                    "30g de cacau em pó",
                    "1/2 colher de chá de sal",
                    "100g de nozes picadas (opcional)"
                ],
                instructions: [
                    "Pré-aqueça o forno a 180°C e unte uma forma quadrada.",
                    "Derreta o chocolate e a manteiga em banho-maria, mexendo até ficar homogêneo.",
                    "Retire do fogo e adicione o açúcar, misturando bem.",
                    "Adicione os ovos um a um, batendo bem após cada adição.",
                    "Peneire a farinha, o cacau e o sal sobre a mistura e incorpore delicadamente.",
                    "Adicione as nozes se desejar.",
                    "Despeje na forma e asse por 25-30 minutos.",
                    "Deixe esfriar antes de cortar."
                ],
                tips: "Para um brownie mais úmido, retire do forno quando o palito sair com algumas migalhas úmidas. Para mais firmeza, asse até o palito sair limpo."
            }
        };

        // Abrir modal com a receita clicada
        document.querySelectorAll('.view-recipe').forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const recipeId = this.getAttribute('data-recipe');
                const recipe = recipes[recipeId];
                
                if (recipe) {
                    document.getElementById('modal-recipe-title').textContent = recipe.title;
                    document.getElementById('modal-recipe-time').textContent = recipe.time;
                    document.getElementById('modal-recipe-difficulty').textContent = recipe.difficulty;
                    document.getElementById('modal-recipe-servings').textContent = recipe.servings;
                    document.getElementById('modal-recipe-tips').textContent = recipe.tips;
                    document.querySelector('.modal-recipe-image').src = recipe.image;
                    
                    const ingredientsList = document.getElementById('modal-recipe-ingredients');
                    ingredientsList.innerHTML = '';
                    recipe.ingredients.forEach(ingredient => {
                        const li = document.createElement('li');
                        li.textContent = ingredient;
                        ingredientsList.appendChild(li);
                    });