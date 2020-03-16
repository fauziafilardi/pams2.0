import FM_Facility_Master from  '@/views/FM/FM_Facility/FM_Facility_Master'
import FM_Type_Master from  '@/views/FM/FM_Type/FM_Type_Master'
import FM_Booking_Master from  '@/views/FM/FM_Booking/FM_Booking_Master'
import FM_BookingExpress_Master from  '@/views/FM/FM_BookingExpress/FM_BookingExpress_Master'
import FM_BookingInquiry_Master from  '@/views/FM/FM_BookingInquiry/FM_BookingInquiry_Master'
import FM_Measurement_Master from  '@/views/FM/FM_Measurement/FM_Measurement_Master'
import FM_RequestConfirmation_Master from  '@/views/FM/FM_RequestConfirmation/FM_RequestConfirmation_Master'
import FM_Request_Master from  '@/views/FM/FM_Request/FM_Request_Master'
import FM_BookingCharges_Master from  '@/views/FM/FM_BookingCharges/FM_BookingCharges_Master'
import FM_BookingCancellation_Master from  '@/views/FM/FM_BookingCancellation/FM_BookingCancellation_Master'
import FM_BookingConsolidation_Master from  '@/views/FM/FM_BookingConsolidation/FM_BookingConsolidation_Master'
import FM_BookingConsolidationCancellation_Master from  '@/views/FM/FM_BookingConsolidationCancellation/FM_BookingConsolidationCancellation_Master'
import FM_BookingConfirmation_Master from  '@/views/FM/FM_BookingConfirmation/FM_BookingConfirmation_Master'
import FM_CloseChargeableBooking_Master from  '@/views/FM/FM_CloseChargeableBooking/FM_CloseChargeableBooking_Master'
import FM_Equipment_Master from  '@/views/FM/FM_Equipment/FM_Equipment_Master'


export const FMRender = {
    path: '/FM',
    component: {
      render (c) { return c('router-view') }
    },
    children: [
        {
            path: '/FM/FM_Facility',
            name: 'FM_Facility',
            component: FM_Facility_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_Type',
            name: 'FM_Type',
            component: FM_Type_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_Booking',
            name: 'FM_Booking',
            component: FM_Booking_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingExpress',
            name: 'FM_BookingExpress',
            component: FM_BookingExpress_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingInquiry',
            name: 'FM_BookingInquiry',
            component: FM_BookingInquiry_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_Measurement',
            name: 'FM_Measurement',
            component: FM_Measurement_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_RequestConfirmation',
            name: 'FM_RequestConfirmation',
            component: FM_RequestConfirmation_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_Request',
            name: 'FM_Request',
            component: FM_Request_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingCharges',
            name: 'FM_BookingCharges',
            component: FM_BookingCharges_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingCancellation',
            name: 'FM_BookingCancellation',
            component: FM_BookingCancellation_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingConsolidation',
            name: 'FM_BookingConsolidation',
            component: FM_BookingConsolidation_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingConsolidationCancellation',
            name: 'FM_BookingConsolidationCancellation',
            component: FM_BookingConsolidationCancellation_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_BookingConfirmation',
            name: 'FM_BookingConfirmation',
            component: FM_BookingConfirmation_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_CloseChargeableBooking',
            name: 'FM_CloseChargeableBooking',
            component: FM_CloseChargeableBooking_Master,
            meta: {
                requiresAuth: true
            }
        }
        
        ,
        {
            path: '/FM/FM_Equipment',
            name: 'FM_Equipment',
            component: FM_Equipment_Master,
            meta: {
                requiresAuth: true
            }
        }
    ]
}