import { useState } from 'react'
import { initiatePayment, RAZORPAY_KEY_ID, RazorpayResponse } from '../lib/razorpay'

interface PaymentOptions {
  amount: number // Amount in INR
  name: string
  description: string
  prefill?: {
    name?: string
    email?: string
    contact?: string
  }
  notes?: Record<string, any>
}

interface UseRazorpayReturn {
  initiatePaymentFlow: (options: PaymentOptions) => Promise<void>
  isProcessing: boolean
  paymentStatus: 'idle' | 'processing' | 'success' | 'failed'
  paymentData: RazorpayResponse | null
}

export const useRazorpay = (
  onSuccess?: (response: RazorpayResponse) => void,
  onFailure?: () => void
): UseRazorpayReturn => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle')
  const [paymentData, setPaymentData] = useState<RazorpayResponse | null>(null)

  const initiatePaymentFlow = async (options: PaymentOptions) => {
    setIsProcessing(true)
    setPaymentStatus('processing')

    console.log('Initiating Razorpay payment with options:', options)

    try {
      await initiatePayment({
        key: RAZORPAY_KEY_ID,
        amount: options.amount * 100, // Convert to paise
        currency: 'INR',
        name: options.name,
        description: options.description,
        image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=200',
        handler: (response: RazorpayResponse) => {
          console.log('Payment successful, response:', response)
          setPaymentData(response)
          setPaymentStatus('success')
          setIsProcessing(false)
          onSuccess?.(response)
        },
        prefill: options.prefill,
        notes: options.notes,
        theme: {
          color: '#f97316', // Orange theme
        },
        modal: {
          ondismiss: () => {
            console.log('Payment dismissed by user')
            setPaymentStatus('failed')
            setIsProcessing(false)
            onFailure?.()
          },
        },
      })
    } catch (error) {
      console.error('Payment failed:', error)
      setPaymentStatus('failed')
      setIsProcessing(false)
      onFailure?.()
    }
  }

  return {
    initiatePaymentFlow,
    isProcessing,
    paymentStatus,
    paymentData,
  }
}
