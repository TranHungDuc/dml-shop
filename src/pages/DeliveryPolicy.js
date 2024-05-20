

import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const DeliveryPolicy = () => {
  return <>
    <Meta title={"Delivery Policy"} />
    <BreadCrumb title="Delivery Policy" />
    <Container class1="delivery-policy-wrapper py-5 home-wrapper-2">
        <div className="row">
            <div className="col-12">
                <div className="policy-card">
                    <h3 className='text-center mb-2'>Delivery Policy</h3>
                    <h5>Lorem ipsum 1</h5>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam vestibulum dui nec gravida porttitor. 
                        Etiam aliquet massa quis massa dictum, eu volutpat justo ultrices. 
                        Vestibulum pharetra euismod purus, et scelerisque ipsum dictum eu. 
                        Sed et dictum libero. Nullam ultricies lorem a nisi placerat, in bibendum turpis varius. 
                        Curabitur accumsan ipsum elit, nec eleifend ex lacinia nec. 
                        Vestibulum aliquet ipsum ac mollis condimentum. Suspendisse potenti. 
                        Praesent sagittis blandit nibh, non porta tortor pharetra id. Nullam lacinia vulputate odio. 
                        Mauris at quam vel lacus suscipit auctor sed vel magna. 
                        Pellentesque eu ligula ac erat ultricies posuere. Quisque elit tortor, sagittis id massa eu, imperdiet dictum leo. 
                        Vestibulum vehicula consequat efficitur.
                    </p>
                    <h5>Lorem ipsum 2</h5>
                    <p> Vestibulum ornare odio sem, eget tempus purus sodales eu. 
                        Duis ac odio ac magna luctus auctor vel at neque. 
                        Ut lacinia volutpat aliquet. 
                        Quisque placerat non felis a posuere. In ac consectetur dui, vitae lobortis massa. 
                        Nullam eget condimentum ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
                        Integer accumsan nibh sit amet sapien sodales finibus. Proin ornare at dolor nec congue. Mauris et gravida purus.
                    </p>
                </div>
            </div>
        </div>
    </Container>
  </>
}

export default DeliveryPolicy
