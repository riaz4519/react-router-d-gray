import {Link} from 'react-router-dom';
const Missing = () => {
    return ( 
        <main className="Missing">
            <h2>Page not found</h2>
            <p>well,thats disappointing</p>
            <p>
              <Link to="/">Visit Our Home Page</Link>
            </p>
        </main>
     );
}
 
export default Missing;