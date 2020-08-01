import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';
import {connect} from 'react-redux';
import * as movieActions from '../redux/action/movieAction';
import * as movieHelpers from '../redux/movieDispatch';
import MovieList from './movieListComponent';
import * as scroll from '../../common/scroll';
import MovieModal from './modalContainer';

class MovieBrowser extends React.Component {
 // set buat munculin data selalu page 1 setiap awal run
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    // biar bisa akses props dari moviebrowser
    this.handleScroll = this.handleScroll.bind(this);
  }


  componentDidMount() {
    window.onscroll = this.handleScroll;
    this.props.getTopMovies(this.state.currentPage);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // jika posisi scroll bar sudah 90% dari tinggi client maka tampilkan data page berikutnya
  handleScroll() {
    const {topMovies} = this.props;
    if (!topMovies.isLoading) {
      let percentageScrolled = scroll.getScrollDownPercentage(window);
      if (percentageScrolled > .9) {
        const nextPage = this.state.currentPage + 1;
        this.props.getTopMovies(nextPage);
        this.setState({currentPage: nextPage});
      }
    }
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
        <MovieModal />
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