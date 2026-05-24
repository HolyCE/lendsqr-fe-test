import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { fetchUserById } from '../../services/api';
import { FiArrowLeft, FiStar, FiStar as FiStarOutline } from 'react-icons/fi';
import './UserDetails.scss';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      const data = await fetchUserById(id);
      
      // Save to localStorage as required by the assessment
      if (data) {
        localStorage.setItem(`user_${id}`, JSON.stringify(data));
        setUser(data);
      }
      setLoading(false);
    };
    loadUser();
  }, [id]);

  const renderStars = (tier) => {
    const stars = [];
    for (let i = 1; i <= 3; i++) {
      stars.push(
        i <= tier ? (
          <FiStar key={i} className="star filled" />
        ) : (
          <FiStarOutline key={i} className="star" />
        )
      );
    }
    return stars;
  };

  if (loading) {
    return (
      <Layout>
        <div className="loading-container">Loading user details...</div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="error-container">
          <h2>User not found</h2>
          <button onClick={() => navigate('/users')} className="back-btn">Back to Users</button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="user-details">
        <button onClick={() => navigate('/users')} className="back-btn">
          <FiArrowLeft /> Back to Users
        </button>

        <h1 className="page-title">User Details</h1>

        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-header">
            <div className="profile-info">
              <div className="avatar">
                {user.fullName?.charAt(0) || user.userName?.charAt(0) || 'U'}
              </div>
              <div className="info">
                <h2>{user.fullName || user.userName}</h2>
                <p>{user.userName}</p>
              </div>
            </div>
            <div className="user-tier">
              <span>User's Tier</span>
              <div className="stars">{renderStars(user.tier || 1)}</div>
            </div>
            <div className="account-info">
              <h3>₦{user.balance?.toLocaleString() || '0'}</h3>
              <p>{user.accountNumber || '2089343829'} / Providus Bank</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button 
              className={activeTab === 'general' ? 'active' : ''} 
              onClick={() => setActiveTab('general')}
            >
              General Details
            </button>
            <button 
              className={activeTab === 'documents' ? 'active' : ''} 
              onClick={() => setActiveTab('documents')}
            >
              Documents
            </button>
            <button 
              className={activeTab === 'bank' ? 'active' : ''} 
              onClick={() => setActiveTab('bank')}
            >
              Bank Details
            </button>
            <button 
              className={activeTab === 'loans' ? 'active' : ''} 
              onClick={() => setActiveTab('loans')}
            >
              Loans
            </button>
            <button 
              className={activeTab === 'savings' ? 'active' : ''} 
              onClick={() => setActiveTab('savings')}
            >
              Savings
            </button>
            <button 
              className={activeTab === 'app' ? 'active' : ''} 
              onClick={() => setActiveTab('app')}
            >
              App and System
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'general' && (
              <div className="info-grid">
                <div className="info-row">
                  <div className="info-item">
                    <label>Full Name</label>
                    <p>{user.fullName || user.userName}</p>
                  </div>
                  <div className="info-item">
                    <label>Phone Number</label>
                    <p>{user.phoneNumber}</p>
                  </div>
                  <div className="info-item">
                    <label>Email Address</label>
                    <p>{user.email}</p>
                  </div>
                  <div className="info-item">
                    <label>BVN</label>
                    <p>{user.bvn || '2215667890'}</p>
                  </div>
                  <div className="info-item">
                    <label>Gender</label>
                    <p>{user.gender}</p>
                  </div>
                  <div className="info-item">
                    <label>Marital Status</label>
                    <p>Single</p>
                  </div>
                  <div className="info-item">
                    <label>Children</label>
                    <p>None</p>
                  </div>
                  <div className="info-item">
                    <label>Type of Residence</label>
                    <p>Apartment</p>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Education and Employment</h3>
                  <div className="info-row">
                    <div className="info-item">
                      <label>Level of Education</label>
                      <p>{user.education?.level || 'B.Sc Computer Science'}</p>
                    </div>
                    <div className="info-item">
                      <label>Employment Status</label>
                      <p>{user.education?.employmentStatus || 'Employed'}</p>
                    </div>
                    <div className="info-item">
                      <label>Sector of Employment</label>
                      <p>{user.education?.sector || 'Technology'}</p>
                    </div>
                    <div className="info-item">
                      <label>Duration of Employment</label>
                      <p>{user.education?.duration || '2 years'}</p>
                    </div>
                    <div className="info-item">
                      <label>Office Email</label>
                      <p>{user.education?.officeEmail || user.email}</p>
                    </div>
                    <div className="info-item">
                      <label>Monthly Income</label>
                      <p>₦{user.balance?.toLocaleString() || '200,000'} - ₦400,000</p>
                    </div>
                    <div className="info-item">
                      <label>Loan Repayment</label>
                      <p>{user.education?.loanRepayment || '40,000'}</p>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Socials</h3>
                  <div className="info-row">
                    <div className="info-item">
                      <label>Twitter</label>
                      <p>@{user.userName}_twitter</p>
                    </div>
                    <div className="info-item">
                      <label>Instagram</label>
                      <p>@{user.userName}_insta</p>
                    </div>
                    <div className="info-item">
                      <label>Facebook</label>
                      <p>{user.fullName || user.userName}</p>
                    </div>
                  </div>
                </div>

                <div className="info-section">
                  <h3>Guarantor</h3>
                  <div className="info-row">
                    <div className="info-item">
                      <label>Full Name</label>
                      <p>{user.guarantor?.fullName || 'Debby Ogana'}</p>
                    </div>
                    <div className="info-item">
                      <label>Phone Number</label>
                      <p>{user.guarantor?.phoneNumber || '07060780922'}</p>
                    </div>
                    <div className="info-item">
                      <label>Email Address</label>
                      <p>{user.guarantor?.email || 'debby@gmail.com'}</p>
                    </div>
                    <div className="info-item">
                      <label>Relationship</label>
                      <p>{user.guarantor?.relationship || 'Sister'}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="tab-placeholder">
                <p>No documents available</p>
              </div>
            )}

            {activeTab === 'bank' && (
              <div className="info-grid">
                <div className="info-row">
                  <div className="info-item">
                    <label>Bank Name</label>
                    <p>Providus Bank</p>
                  </div>
                  <div className="info-item">
                    <label>Account Number</label>
                    <p>2089343829</p>
                  </div>
                  <div className="info-item">
                    <label>Account Name</label>
                    <p>{user.fullName || user.userName}</p>
                  </div>
                </div>
              </div>
            )}

            {(activeTab === 'loans' || activeTab === 'savings' || activeTab === 'app') && (
              <div className="tab-placeholder">
                <p>No {activeTab} information available</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserDetails;
