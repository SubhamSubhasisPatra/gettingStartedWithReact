import React, { Component } from "react";
// import { getMovies } from "../services/fakeMovieService";

class Counter extends Component {
  state = {
    count: this.props.value,
    imageUlr: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Click me
        </button>
        {/* <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
      </div>
    );
  }

  getBadgeClasses() {
    let dynamicClsses = "badge m-2 badge-";
    dynamicClsses += this.state.count === 0 ? "warning" : "primary";
    return dynamicClsses;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

// FOR bootstrap container

// class Counter extends Component {
//   render() {
//     return (
//       <main className="container">
//         <h1>Hey! This is Subhasis</h1>
//       </main>
//     );
//   }
// }

// export default Counter;

// Movie Rental site

// class Movies extends Component {
//   state = {
//     movies: getMovies(),
//     count: getMovies().length,
//   };

//   handleDelete = (movie) => {
//     const movies = this.state.movies.filter((m) => m._id !== movie._id);
//     this.setState({
//       movies: movies,
//       count: this.state.count - 1,
//     });
//     // console.log(movies);
//   };

//   render() {
//     if (this.state.count === 0)
//       return <p style={{ padding: 20 }}>There is no movies in the list</p>;

//     return (
//       <main className="container">
//         <p style={{ padding: 20 }}>Total movies remains {this.state.count}</p>
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Title</th>
//               <th scope="col">Genre</th>
//               <th scope="col">Stocks</th>
//               <th scope="col">Rating</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.movies.map((movie) => (
//               <tr key={movie._id}>
//                 <th scope="row">{movie.title}</th>
//                 <td>{movie.genre.name}</td>
//                 <td>{movie.numberInStock}</td>
//                 <td>{movie.dailyRentalRate}</td>
//                 <td>
//                   <button
//                     onClick={() => this.handleDelete(movie)}
//                     className="btn btn-outline-danger"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     );
//   }
// }

// export default Movies;
