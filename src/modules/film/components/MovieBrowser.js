import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import {connect} from 'react-redux';
import * as movieActions from '../movieAction';
import * as movieHelpers from '../movieDispatch';
import MovieList from './movieListComponent';

class MovieBrowser extends React.Component {


  componentDidMount() {
    this.props.getTopMovies(1);
  }

  render() {

    const {topMovies} = this.props;
    const movies = movieHelpers.getMoviesList(topMovies.response);

    return (
      <div>
        <AppBar title='Movie Browser' />
        <Container>
          <Row>
            <p>buat modul seach (kalo sempet)</p>
          </Row>
          <Row>
              <MovieList movies={movies} isLoading={topMovies.isLoading} />
          </Row>
        </Container>
      </div>
    );
  }
}

export default connect(

  (state) => ({
    topMovies: state.movieBrowser.topMovies
  }),
 
  { ...movieActions }
)(MovieBrowser);