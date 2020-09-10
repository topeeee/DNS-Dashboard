import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {Card, CardBody, CardHeader, Col, Row, Table, Input} from 'reactstrap';
import {getUsers, searchUser} from "../../store/actions/userAction";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeSquare, faFilePdf, faPrint} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../spinner/Spinner";
import UserActionBtn from "./components/UserActionBtn";
import {isAdmin, isLamata} from "../../environments/constants";
import Pagination from "react-js-pagination";




function UserRow(props) {
  const user = props.user;

  return (
    <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td> <UserActionBtn id={user.id} user={user} /> </td>
    </tr>
  )
}

const Users = ({getUsers, users, user, isLoading,  searchUser, error}) => {
  const [formData, setFormData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [posts, setPosts] = useState([]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0)
  };

  useEffect(()=> {
    if(formData && users){
      setCurrentPage(1)
      const search = users.filter(post => {
        return (post.firstName.toLowerCase().includes(formData.toLowerCase()) || post.lastName.toLowerCase().includes(formData.toLowerCase()))
      });
      setPosts(search)
    }
  },[formData]);

  useEffect(()=> {
    if(users && !formData) {
      setPosts(users.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
    }
  },[users, formData]);

  useEffect(()=>{
    getUsers()
  },[]);

  const onChange = (e) =>{
    e.preventDefault();
    setFormData(e.target.value );
  };

  const onSearch = e => {
    e.preventDefault();
    searchUser(formData)
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xl={12}>
          <Card>
            <CardHeader className="bg-secondary d-flex">
              <div className="w-75 d-flex align-items-center ">
                <form className="w-100 d-flex align-items-center" onSubmit={onSearch}>
                  <Input type="text"
                         // placeholder="Search by Id"
                         className="w-25"
                         name="formData"
                         value={formData}
                         onChange={onChange}
                  />
                  <button className="btn btn-success" type="submit">Search</button>
                </form>
              </div>
              <div className="w-25 text-right">
                <FontAwesomeIcon className="text-warning py-2" title="Print" style={{fontSize: 40,  cursor: "pointer"}} icon={faPrint} onClick={()=> window.print()} />
                <FontAwesomeIcon className="text-primary py-2" title="Send to Email" style={{fontSize: 40,  cursor: "pointer"}} icon={faEnvelopeSquare} />
                <FontAwesomeIcon className="text-danger py-2" title="Download Pdf" style={{fontSize: 40,  cursor: "pointer"}} icon={faFilePdf} />
              </div>
            </CardHeader>
            <CardHeader className="d-flex align-items-center">
              <div className="w-25">
                {(isAdmin || isLamata) ? 'Users': 'Passengers'}
              </div>
            </CardHeader>
            {isLoading && <Spinner />}
            {!isLoading &&
            <CardBody>
              {error && <div className="animated fadeIn pt-1 text-center text-danger mb-2 font-italic">{error}</div>}
              {(users && users.length === 0) &&
              <div className="animated fadeIn pt-1 text-center">No Users Available</div>}
              {((users && users.length > 0) || user) &&
              <Table responsive hover>
                <thead className={isAdmin? 'bg-dark': 'bg-twitter'} style={{color: '#696969'}}>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {users  && currentPosts.map((user, index) =>
                  <UserRow key={index} user={user}/>
                )}
                {user &&
                <UserRow user={user}/>
                }
                </tbody>
              </Table>}
            </CardBody>
            }
          </Card>
        </Col>
      </Row>
      {(!isLoading && currentPosts.length > 0) &&
      <div className="d-flex justify-content-end align-items-center mb-0">
        <Pagination
          activePage={currentPage}
          itemClass="page-item"
          linkClass="page-link"
          itemsCountPerPage={postsPerPage}
          totalItemsCount={posts.length}
          onChange={paginate}
        />
      </div>
      }
    </div>
  )
};
function mapDispatchToProps(dispatch) {
  return {
    getUsers: () => dispatch(getUsers()),
    searchUser: (id) => dispatch(searchUser(id))
  };
}

const mapStateToProps = state => ({
  users: state.user.users,
  user: state.user.user,
  error: state.user.error,
  isLoading: state.user.isLoading

});

export default connect(mapStateToProps,mapDispatchToProps)(Users);
