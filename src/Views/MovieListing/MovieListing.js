import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestApiMovieData } from "../../store/actions";
import { ImCalendar, ImFire } from "react-icons/im";
import { BiTimeFive } from "react-icons/bi";
import { FaRegHandPointRight } from "react-icons/fa";
import { Tabs, Tab } from "react-bootstrap";
class MovieListing extends React.Component {
  componentDidMount() {
    this.props.requestApiMovieData();
  }

  render() {
    const { movieData = {} } = this.props;
    // console.log(movie);
    return (
      <div className="movie-listing__container">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-3 left-panel">
              <img src={movieData.Poster} alt={movieData.Title} className="movie-poster" />
              <div className="production-details">
                {/* <div className="awards">{movieData.Awards}</div> */}
                <div className="production">{movieData.Production}</div>
                <div className="country">{movieData.Country}</div>
              </div>
            </div>
            <div className="col-md-9 right-panel">
              <div className="title">{movieData.Title}</div>
              <div className="d-flex movie-details">
                <div className="duration">
                  <BiTimeFive className="mr-1 mb-1" />
                  {movieData.Runtime}
                </div>
                <div className="language">{movieData.Language}</div>
                <div className="genre">{movieData.Genre}</div>
              </div>
              <div className="release-date mt-3">
                <ImCalendar className="mr-2 mb-1" />
                {movieData.Released}
              </div>
              <div className="imdb-ratings">
                <ImFire className="mr-1" />
                <div className="rating">{movieData.imdbRating}</div>
                <div className="votes">({movieData.imdbVotes})</div>
              </div>
              <div className="tabs__wrapper">
                <Tabs defaultActiveKey="summary" id="uncontrolled-tab-example">
                  <Tab eventKey="summary" title="Summary">
                    <div className="summary">
                      <div className="label">Summary</div>
                      <div className="synopsis">{movieData.Plot}</div>
                      <div className="label">Cast</div>
                      <div className="Cast">
                        {movieData?.Actors?.split(", ")?.map((actor, actorIndex) => {
                          return (
                            <div key={`actor-${actorIndex}`}>
                              <FaRegHandPointRight className="mr-2 mb-1" />
                              {actor}
                            </div>
                          );
                        })}
                      </div>
                      <div className="label">Writers</div>
                      <div className="writer">
                        {movieData?.Writer?.split(", ")?.map((writer, writerIndex) => {
                          return (
                            <div key={`writer-${writerIndex}`}>
                              <FaRegHandPointRight className="mr-2 mb-1" />
                              {writer}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey="reviews" title="Reviews">
                    <div className="mt-3 p-1">
                      {movieData.Ratings?.map((rating, ratingIndex) => {
                        return (
                          <div className="d-flex justify-content-between w-50 rating-row" key={`rating-${ratingIndex}`}>
                            <div className="rating-source">{rating.Source}</div>
                            <div className="rating-value">{rating.Value}</div>
                          </div>
                        );
                      })}
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ movieData: state.movieData });

const mapDispatchToProps = (dispatch) => bindActionCreators({ requestApiMovieData }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MovieListing);
