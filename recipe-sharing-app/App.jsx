import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to get ID from URL params
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;

