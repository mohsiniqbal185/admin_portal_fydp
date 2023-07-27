import './ProfileView.scss';
import Widget from '../widget/Widget';
function ProfileView() {

    return (
        <div>
            <div className="top">
                <div className="left">
                    <div className="editButton">
                        Edit
                    </div>
                    <h1 className="title">Information</h1>
                    <div className="item">
                        <img className='itemImg' src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" alt="" />
                        <div className="details">
                        <div className="detailItem">
                                <span className="itemKey">User ID: </span>
                                <span className="itemValue">1</span>
                            </div>
                            <h1 className="itemTitle">Hamza Junaid</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">hamza@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+12 343 353 223</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country: </span>
                                <span className="itemValue">Pakistan</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">CNIC: </span>
                                <span className="itemValue">4220115908717</span>
                            </div>
                            


                        </div>


                    </div>
                    
                </div>
                <div className='homeContainer'>
                <div className="widgets">
                                <Widget type='user'/>
                                
                            </div>
                            </div>
                {/* <div className="right">
                    <Chart aspect={3 / 1} title="User spending last 6 months" />
                </div> */}
            </div>

            {/* <div className="bottom">
                <h1 className="title">Latest Transactions</h1>
                <List />
            </div> */}
        </div>
    )
}
export default ProfileView;