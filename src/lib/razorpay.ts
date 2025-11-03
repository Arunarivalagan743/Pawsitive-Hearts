// Razorpay configuration and utilities
// Get your test key from Razorpay Dashboard: https://dashboard.razorpay.com/app/website-app-settings/api-keys
export const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_1234567890'

export interface RazorpayOptions {
  key: string
  amount: number // Amount in paise (100 paise = 1 INR)
  currency: string
  name: string
  description: string
  image?: string
  order_id?: string
  handler: (response: RazorpayResponse) => void
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  notes?: Record<string, any>
  theme?: {
    color?: string
  }
  modal?: {
    ondismiss?: () => void
  }
}

export interface RazorpayResponse {
  razorpay_payment_id: string
  razorpay_order_id?: string
  razorpay_signature?: string
}

declare global {
  interface Window {
    Razorpay: any
  }
}

// Load Razorpay script
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // Check if Razorpay is already loaded
    if (window.Razorpay) {
      resolve(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

// Initialize payment
export const initiatePayment = async (options: RazorpayOptions): Promise<void> => {
  const res = await loadRazorpayScript()

  if (!res) {
    alert('Razorpay SDK failed to load. Please check your internet connection.')
    return
  }

  if (!window.Razorpay) {
    alert('Razorpay is not available. Please refresh the page.')
    return
  }

  try {
    // Add retry configuration to options
    const razorpayOptions = {
      ...options,
      method: {
        netbanking: true,
        card: true,
        upi: true,
        wallet: true,
      }
    }

    const paymentObject = new window.Razorpay(razorpayOptions)
    paymentObject.open()
  } catch (error) {
    console.error('Error opening Razorpay:', error)
    alert('Failed to open payment gateway. Please try again.')
  }
}
