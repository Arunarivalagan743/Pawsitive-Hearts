import React from 'react'
import { CheckCircle, Download, Printer, Calendar, CreditCard, User, Mail, Phone, Heart } from 'lucide-react'

interface PaymentReceiptProps {
  paymentData: {
    razorpay_payment_id: string
    razorpay_order_id?: string
    razorpay_signature?: string
  }
  applicationData: {
    name: string
    email: string
    phone: string
    dogName: string
    dogImage: string
    amount: number
    submittedAt: string
  }
  onClose: () => void
}

export const PaymentReceipt: React.FC<PaymentReceiptProps> = ({ 
  paymentData, 
  applicationData, 
  onClose 
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short'
    })
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // Create a downloadable receipt
    const receiptContent = `
DOGS OF BOMBAY HOUSE - ADOPTION RECEIPT
========================================

Payment ID: ${paymentData.razorpay_payment_id}
Date: ${formatDate(applicationData.submittedAt)}

Adopter Details:
Name: ${applicationData.name}
Email: ${applicationData.email}
Phone: ${applicationData.phone}

Adoption Details:
Dog Name: ${applicationData.dogName}
Adoption Fee: ₹${applicationData.amount}

Payment Status: SUCCESS ✓
Payment Method: Razorpay

Thank you for choosing to adopt!
    `.trim()

    const blob = new Blob([receiptContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `adoption-receipt-${paymentData.razorpay_payment_id}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Print-friendly header */}
        <div className="p-8 print:p-4">
          {/* Header with Logo */}
          <div className="text-center mb-8 print:mb-4">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-12 w-12 text-orange-500 fill-orange-500" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 print:text-2xl">Pawsitive Hearts</h1>
            <p className="text-gray-600 mt-2">Adoption Payment Receipt</p>
          </div>

          {/* Success Badge */}
          <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 mb-6 text-center print:mb-4">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-3" />
            <h2 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h2>
            <p className="text-green-600">Your adoption application has been confirmed</p>
          </div>

          {/* Dog Image */}
          <div className="mb-6 print:mb-4">
            <img 
              src={applicationData.dogImage} 
              alt={applicationData.dogName}
              className="w-full h-64 object-cover rounded-lg shadow-md print:h-48"
            />
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 print:p-4 print:mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 print:text-lg">Payment Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <CreditCard className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Payment ID</p>
                  <p className="font-mono text-sm font-semibold text-gray-900 break-all">
                    {paymentData.razorpay_payment_id}
                  </p>
                </div>
              </div>

              {paymentData.razorpay_order_id && (
                <div className="flex items-start">
                  <CreditCard className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-gray-600">Order ID</p>
                    <p className="font-mono text-sm font-semibold text-gray-900 break-all">
                      {paymentData.razorpay_order_id}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-600">Transaction Date</p>
                  <p className="font-semibold text-gray-900">{formatDate(applicationData.submittedAt)}</p>
                </div>
              </div>

              <div className="border-t border-gray-300 pt-3 mt-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Adoption Fee</span>
                  <span className="text-2xl font-bold text-green-600">₹{applicationData.amount}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Adopter Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 print:p-4 print:mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4 print:text-lg">Adopter Information</h3>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <User className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Full Name</p>
                  <p className="font-semibold text-gray-900">{applicationData.name}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Email Address</p>
                  <p className="font-semibold text-gray-900">{applicationData.email}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Phone Number</p>
                  <p className="font-semibold text-gray-900">{applicationData.phone}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Heart className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-600">Adopting</p>
                  <p className="font-semibold text-gray-900">{applicationData.dogName}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Verification Badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 print:mb-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-blue-900 text-sm">Payment Verified</p>
                <p className="text-blue-700 text-xs mt-1">
                  This payment has been successfully verified and processed through Razorpay's secure payment gateway.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 print:mb-4">
            <h4 className="font-semibold text-orange-900 mb-2">📋 What's Next?</h4>
            <ul className="text-sm text-orange-800 space-y-1">
              <li>• Our team will review your application within 24 hours</li>
              <li>• You'll receive a call to schedule a meet & greet with {applicationData.dogName}</li>
              <li>• Please keep this receipt for your records</li>
              <li>• Check your email for further instructions</li>
            </ul>
          </div>

          {/* Action Buttons - Hidden in print */}
          <div className="flex gap-3 print:hidden">
            <button
              onClick={handlePrint}
              className="flex-1 flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Printer className="h-5 w-5" />
              Print Receipt
            </button>
            <button
              onClick={handleDownload}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Download className="h-5 w-5" />
              Download
            </button>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-3 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors print:hidden"
          >
            Close
          </button>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-6 pt-6 border-t border-gray-200 print:text-xs">
            <p>Thank you for choosing to adopt from Dogs of Bombay House</p>
            <p className="mt-1">For queries, contact us at: info@dogsofbombayhouse.org | +91 98765 43210</p>
          </div>
        </div>
      </div>
    </div>
  )
}
