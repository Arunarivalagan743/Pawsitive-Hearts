# 🐕 Dogs of Bombay House - Razorpay Integration Guide

## 🔐 Setting Up Razorpay Payment Gateway

This application uses **Razorpay** for secure payment processing for adoption fees and donations.

### Step 1: Create a Razorpay Account

1. Go to [https://razorpay.com](https://razorpay.com)
2. Sign up for a free account
3. Complete the KYC verification (for production) - **Not required for testing**

### Step 2: Get Your Test API Keys

1. Login to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Navigate to **Settings** → **API Keys**
3. Switch to **Test Mode** (toggle in the top-right corner)
4. Generate Test API Keys:
   - **Key ID** (starts with `rzp_test_`)
   - **Key Secret** (starts with `rzp_test_`)

⚠️ **Important**: Never commit your API keys to version control!

### Step 3: Configure Environment Variables

1. Copy the `.env.example` file to create your `.env` file:
   ```powershell
   Copy-Item .env.example .env
   ```

2. Open `.env` and add your Razorpay test keys:
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID_HERE
   VITE_RAZORPAY_KEY_SECRET=rzp_test_YOUR_SECRET_HERE
   ```

3. The `.env` file is already in `.gitignore` to keep your keys safe

### Step 4: Restart Development Server

After updating the `.env` file, restart your dev server:
```powershell
# Stop the current server (Ctrl+C)
npm run dev
```

## 🧪 Testing Razorpay Payments

### Test Mode Features

- ✅ All Razorpay features work in test mode
- ✅ No real money transactions
- ✅ Payment verification and webhooks work
- ✅ Full payment flow simulation

### Test Card Details

Use these test card details on the Razorpay checkout page:

| Card Type | Card Number | CVV | Expiry | Result |
|-----------|-------------|-----|--------|--------|
| Success | `4111 1111 1111 1111` | Any 3 digits | Any future date | ✅ Payment Success |
| Failure | `4111 1111 1111 1112` | Any 3 digits | Any future date | ❌ Payment Failure |

**Other Test Cards:**
- **Mastercard**: `5555 5555 5555 4444`
- **Visa**: `4012 8888 8888 1881`
- **Rupay**: `6521 5452 1000 0009`

### UPI Test Mode

For UPI payments in test mode:
- UPI ID: `success@razorpay`
- No OTP required
- Instant success

### Net Banking Test Mode

- Select any bank
- Username: `test`
- Password: `test`
- OTP: `1234`

## 💳 Payment Flow in the Application

1. User fills out the adoption application form
2. Clicks "Pay ₹500 & Submit Application"
3. Razorpay checkout modal opens
4. User enters test card details
5. Payment is processed
6. On success:
   - Payment ID is captured
   - Application is saved with payment details
   - Success modal is shown
7. On failure/cancellation:
   - User is notified
   - Can retry payment

## 🔧 Current Implementation

### Files Created/Modified:

1. **`src/lib/razorpay.ts`** - Razorpay configuration and utility functions
2. **`src/hooks/useRazorpay.ts`** - Custom React hook for payment handling
3. **`src/pages/DogProfile.tsx`** - Updated with payment integration
4. **`.env`** - Environment variables (add your keys here)
5. **`.env.example`** - Template for environment variables

### Current Features:

- ✅ Secure payment processing
- ✅ Payment status tracking
- ✅ Success/failure handling
- ✅ Form pre-fill with user details
- ✅ Payment verification
- ✅ Responsive checkout modal
- ✅ Test mode enabled

## 📝 Testing Checklist

- [ ] Add your Razorpay test keys to `.env`
- [ ] Restart the development server
- [ ] Navigate to a dog profile page
- [ ] Click "Adopt Me" button
- [ ] Fill out the adoption form
- [ ] Click "Pay ₹500 & Submit Application"
- [ ] Use test card: `4111 1111 1111 1111`
- [ ] Complete the payment
- [ ] Verify success modal appears
- [ ] Check console for payment details

## 🚀 Going to Production

When ready for production:

1. Complete Razorpay KYC verification
2. Get Production API keys from Razorpay Dashboard
3. Switch to Live Mode in Razorpay Dashboard
4. Update `.env` with production keys:
   ```env
   VITE_RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
   ```
5. Implement server-side payment verification (recommended)
6. Set up webhooks for payment notifications

## 🔒 Security Best Practices

1. ✅ Never expose `VITE_RAZORPAY_KEY_SECRET` in frontend code
2. ✅ Always verify payments on the backend
3. ✅ Use webhooks for payment confirmation
4. ✅ Store payment records in your database
5. ✅ Implement proper error handling
6. ✅ Add rate limiting for payment attempts

## 📚 Additional Resources

- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Test Cards](https://razorpay.com/docs/payments/payments/test-card-details/)
- [Payment Gateway Integration](https://razorpay.com/docs/payments/payment-gateway/)
- [Webhooks Setup](https://razorpay.com/docs/webhooks/)

## 🆘 Troubleshooting

### Payment modal not opening?
- Check if Razorpay script is loaded (check browser console)
- Verify API key in `.env` file
- Ensure server is restarted after `.env` changes

### Payment failing immediately?
- Verify you're using test mode keys (`rzp_test_`)
- Check if test card details are correct
- Look for errors in browser console

### Environment variables not working?
- Ensure `.env` file is in the project root
- Variables must start with `VITE_` prefix
- Restart dev server after changing `.env`

---

**Need Help?** Check the Razorpay documentation or contact their support team.
