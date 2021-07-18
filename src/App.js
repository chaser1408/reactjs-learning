import "./App.css";
import ClassBasedComponent from "./react-lesson-1/demo-component/ClassBasedComponent";
import FunctionalComponent from "./react-lesson-1/demo-component/FunctionalComponent";
import ClassDataBinding from "./react-lesson-1/exercise-component/data-binding/ClassDataBinding";
import Courses from "./react-lesson-1/exercise-component/exercise-1/Courses";
import Header from "./react-lesson-1/exercise-component/exercise-1/Header";
import HomeExercise2 from "./react-lesson-1/exercise-component/exercise-2/HomeExercise2";
import HomeExercise3 from "./react-lesson-1/exercise-component/exercise-3/HomeExercise3";

const App = () => {
    return (
        <div className="App">
            {/* Demo Component */}
            {/* <ClassBasedComponent /> */}
            {/* <FunctionalComponent /> */}

            {/* Exercise 1 - Component */}
            {/* <Header /> */}
            {/* <Courses /> */}

            {/* Exercise 2 - 5 Component */}
            {/* <HomeExercise2 /> */}

            {/* Exercise 3  */}
            {/* <HomeExercise3 /> */}

            {/* Data binding  */}
            <ClassDataBinding />
        </div>
    );
};

export default App;
