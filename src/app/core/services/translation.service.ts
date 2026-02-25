import { Injectable, signal } from '@angular/core';

export type Lang = 'en' | 'nl';

export interface Translations {
  // Nav
  nav_services: string;
  nav_how_it_works: string;
  nav_service_area: string;
  nav_about: string;
  nav_contact: string;
  nav_tyre_guide: string;
  nav_book: string;
  nav_call: string;

  // Header booking
  header_book: string;

  // Footer
  footer_tagline: string;
  footer_quick_links: string;
  footer_support: string;
  footer_contact_us: string;
  footer_faq: string;
  footer_service_area: string;
  footer_contact: string;
  footer_terms: string;
  footer_privacy: string;
  footer_cookie: string;
  footer_rights: string;
  footer_about: string;
  footer_services: string;
  footer_how: string;
  footer_pricing: string;
  footer_hours: string;

  // Home Hero
  home_badge: string;
  home_h1_1: string;
  home_h1_accent: string;
  home_h1_2: string;
  home_h1_sub: string;
  home_book_btn: string;
  home_social_proof: string;

  // Value Props
  vp_time_title: string;
  vp_time_desc: string;
  vp_mobile_title: string;
  vp_mobile_desc: string;
  vp_quality_title: string;
  vp_quality_desc: string;
  vp_eco_title: string;
  vp_eco_desc: string;

  // Home Services
  services_title: string;
  services_sub: string;
  services_learn_more: string;
  services_view_all: string;

  // How it works home
  how_title: string;
  how_1_title: string;
  how_1_desc: string;
  how_2_title: string;
  how_2_desc: string;
  how_3_title: string;
  how_3_desc: string;

  // Testimonials
  testimonials_title: string;

  // CTA banner
  cta_title: string;
  cta_sub: string;
  cta_book: string;
  cta_support: string;

  // Services page
  sp_badge: string;
  sp_h1: string;
  sp_sub: string;
  sp_book_service: string;

  // How it works page
  hiw_badge: string;
  hiw_h1: string;
  hiw_sub: string;
  hiw_faq_title: string;
  hiw_book_btn: string;

  // Service area page
  sa_badge: string;
  sa_h1: string;
  sa_sub: string;
  sa_covered: string;
  sa_not_listed_title: string;
  sa_not_listed_sub: string;
  sa_check: string;
  sa_covered_badge: string;

  // About page
  ab_badge: string;
  ab_h1: string;
  ab_sub: string;
  ab_story_title: string;
  ab_story_p1: string;
  ab_story_p2: string;
  ab_values_title: string;
  ab_cta: string;

  // Contact page
  co_badge: string;
  co_h1: string;
  co_sub: string;
  co_form_title: string;
  co_form_sub: string;
  co_name: string;
  co_phone: string;
  co_email: string;
  co_service: string;
  co_service_placeholder: string;
  co_date: string;
  co_location: string;
  co_location_placeholder: string;
  co_message: string;
  co_message_placeholder: string;
  co_submit: string;
  co_success_title: string;
  co_success_sub: string;
  co_book_another: string;
  co_hours_title: string;
  co_help: string;

  // Booking page
  bk_title: string;
  bk_step1: string;
  bk_step2: string;
  bk_step3: string;
  bk_step4: string;
  bk_vehicle_title: string;
  bk_vehicle_sub: string;
  bk_tab_plate: string;
  bk_tab_manual: string;
  bk_plate_label: string;
  bk_plate_placeholder: string;
  bk_find_btn: string;
  bk_plate_hint: string;
  bk_make: string;
  bk_model: string;
  bk_year: string;
  bk_trim: string;
  bk_select_make: string;
  bk_select_model: string;
  bk_select_year: string;
  bk_select_trim: string;
  bk_back: string;
  bk_continue: string;
  bk_summary_title: string;
  bk_vehicle_label: string;
  bk_vehicle_empty: string;
  bk_services_label: string;
  bk_fitting_fee: string;
  bk_subtotal: string;
  bk_tax: string;
  bk_total: string;
  bk_disclaimer: string;
  bk_need_help: string;
  bk_partners_title: string;
  bk_service_title: string;
  bk_service_sub: string;
  bk_schedule_title: string;
  bk_schedule_sub: string;
  bk_confirm_title: string;
  bk_confirm_sub: string;
  bk_confirm_btn: string;
  bk_confirmed_title: string;
  bk_confirmed_sub: string;
  bk_new_booking: string;

  // Tyre Markings page
  tm_badge: string;
  tm_h1: string;
  tm_sub: string;
  tm_download: string;
  tm_breakdown_title: string;
  tm_width: string;
  tm_width_desc: string;
  tm_aspect: string;
  tm_aspect_desc: string;
  tm_diameter: string;
  tm_diameter_desc: string;
  tm_load: string;
  tm_load_desc: string;
  tm_load_note: string;
  tm_speed: string;
  tm_speed_desc: string;
  tm_speed_note: string;
  tm_shop_title: string;
  tm_shop_sub: string;
  tm_shop_btn: string;
  tm_speed_chart_title: string;
  tm_speed_chart_sub: string;

  // Login page
  login_title: string;
  login_sub: string;
  login_email: string;
  login_password: string;
  login_remember: string;
  login_forgot: string;
  login_btn: string;
  login_no_account: string;

  // Opening hours (home)
  oh_title: string;
  oh_sub: string;
  oh_open: string;
  oh_closed: string;
  oh_today: string;

  // Home service cards (translatable)
  home_svc_change_title: string;
  home_svc_change_desc: string;
  home_svc_balance_title: string;
  home_svc_balance_desc: string;
  home_svc_rim_title: string;
  home_svc_rim_desc: string;
  home_svc_swap_title: string;
  home_svc_swap_desc: string;
  // Booking service labels
  bk_svc_change_title: string;
  bk_svc_change_desc: string;
  bk_svc_balance_title: string;
  bk_svc_balance_desc: string;
  bk_svc_rim_title: string;
  bk_svc_rim_desc: string;
  bk_svc_swap_title: string;
  bk_svc_swap_desc: string;
  // Weekday names
  day_mon: string; day_tue: string; day_wed: string; day_thu: string;
  day_fri: string; day_sat: string; day_sun: string;
  day_monday: string; day_tuesday: string; day_wednesday: string;
  day_thursday: string; day_friday: string; day_saturday: string; day_sunday: string;
  // Registration
  bk_reg_number: string;

  // Services page — card content
  sp_svc_change_title: string; sp_svc_change_desc: string;
  sp_svc_change_f1: string; sp_svc_change_f2: string; sp_svc_change_f3: string; sp_svc_change_f4: string;
  sp_svc_balance_title: string; sp_svc_balance_desc: string;
  sp_svc_balance_f1: string; sp_svc_balance_f2: string; sp_svc_balance_f3: string; sp_svc_balance_f4: string;
  sp_svc_rim_title: string; sp_svc_rim_desc: string;
  sp_svc_rim_f1: string; sp_svc_rim_f2: string; sp_svc_rim_f3: string; sp_svc_rim_f4: string;
  sp_svc_swap_title: string; sp_svc_swap_desc: string;
  sp_svc_swap_f1: string; sp_svc_swap_f2: string; sp_svc_swap_f3: string; sp_svc_swap_f4: string;

  // Header login button
  header_login: string;

  // Booking calendar labels
  bk_date_label: string;
  bk_time_label: string;

}

const EN: Translations = {
  nav_services: 'Services',
  nav_how_it_works: 'How it Works',
  nav_service_area: 'Service Area',
  nav_about: 'About',
  nav_contact: 'Contact',
  nav_tyre_guide: 'Tyre Guide',
  nav_book: 'Book Appointment',
  nav_call: 'Call Now',
  header_book: 'Book Appointment',
  footer_tagline: 'The leading mobile tire service in East Flanders. We combine technology and expertise to deliver safety to your door.',
  footer_quick_links: 'Quick Links',
  footer_support: 'Support',
  footer_contact_us: 'Contact Us',
  footer_faq: 'FAQ',
  footer_service_area: 'Service Area',
  footer_contact: 'Contact',
  footer_terms: 'Terms & Conditions',
  footer_privacy: 'Privacy Policy',
  footer_cookie: 'Cookie Policy',
  footer_rights: 'All rights reserved.',
  footer_about: 'About Us',
  footer_services: 'Services',
  footer_how: 'How it Works',
  footer_pricing: 'Pricing',
  footer_hours: 'Working Hours',
  home_badge: 'Mobile Service Across Belgium',
  home_h1_1: 'Professional Mobile',
  home_h1_accent: 'Tire Service',
  home_h1_2: 'at Your Doorstep',
  home_h1_sub: 'Premium on-site tire fitting, balancing, and repair across Belgium. We bring the garage to your home, office, or roadside.',
  home_book_btn: 'Book Appointment',
  home_social_proof: 'from 2k+ drivers',
  vp_time_title: 'Save Time',
  vp_time_desc: 'Skip the waiting room. We work while you live.',
  vp_mobile_title: 'Mobile Service',
  vp_mobile_desc: 'Fully equipped mobile units come directly to you.',
  vp_quality_title: 'Premium Quality',
  vp_quality_desc: 'Certified technicians and top-tier equipment.',
  vp_eco_title: 'Eco-Friendly',
  vp_eco_desc: 'Responsible tire recycling and efficient routes.',
  services_title: 'Our Services',
  services_sub: 'Comprehensive on-site tire solutions delivered with precision and care.',
  services_learn_more: 'Learn More',
  services_view_all: 'View All Services',
  how_title: 'How It Works',
  how_1_title: 'Book Online',
  how_1_desc: 'Select your service and choose a time slot that fits your schedule.',
  how_2_title: 'We Come to You',
  how_2_desc: 'Our mobile workshop arrives at your location with everything needed.',
  how_3_title: 'Back on the Road',
  how_3_desc: 'Service completed in under 45 minutes. Ready for your next journey.',
  testimonials_title: 'Customer Quotes',
  cta_title: 'Ready for a hassle-free tire service?',
  cta_sub: "Don't waste time at the shop. Let us bring the expertise to you today.",
  cta_book: 'Book Your Appointment',
  cta_support: 'Contact Support',
  sp_badge: 'What We Offer',
  sp_h1: 'Our Services',
  sp_sub: 'Comprehensive on-site tire solutions delivered wherever you are in Belgium.',
  sp_book_service: 'Book This Service',
  hiw_badge: 'Simple & Fast',
  hiw_h1: 'How It Works',
  hiw_sub: 'From booking to back on the road — in under 45 minutes.',
  hiw_faq_title: 'Frequently Asked Questions',
  hiw_book_btn: 'Book Your Appointment Now',
  sa_badge: 'Coverage',
  sa_h1: 'Service Area',
  sa_sub: 'We proudly serve East Flanders and surrounding regions across Belgium.',
  sa_covered: 'Covered Municipalities',
  sa_not_listed_title: 'Not on the list?',
  sa_not_listed_sub: 'Contact us — we may still be able to reach you.',
  sa_check: 'Check',
  sa_covered_badge: 'Covered',
  ab_badge: 'Who We Are',
  ab_h1: 'About Tyre-Express',
  ab_sub: "Belgium's most trusted mobile tire service, built on expertise, speed, and convenience.",
  ab_story_title: 'Our Story',
  ab_story_p1: 'Tyre-Express was founded with a simple mission: eliminate the frustration of traditional tire shops. Long waiting times, inconvenient locations, and lost productivity — we saw a better way.',
  ab_story_p2: 'Based in Lede, East Flanders, our mobile teams serve thousands of drivers annually across Belgium. From a single van, we\'ve grown into a trusted fleet of certified technicians who bring professional-grade tire services directly to you.',
  ab_values_title: 'Our Values',
  ab_cta: 'Work With Us',
  co_badge: 'Get in Touch',
  co_h1: 'Book or Contact Us',
  co_sub: "Ready to schedule a service, or have a question? We're here to help.",
  co_form_title: 'Book an Appointment',
  co_form_sub: "Fill in your details and we'll confirm your slot within 1 hour.",
  co_name: 'Full Name',
  co_phone: 'Phone Number',
  co_email: 'Email',
  co_service: 'Service',
  co_service_placeholder: 'Select service…',
  co_date: 'Preferred Date',
  co_location: 'Location / Address',
  co_location_placeholder: 'Hoofdstraat 12, Gent',
  co_message: 'Message (optional)',
  co_message_placeholder: 'Vehicle type, notes…',
  co_submit: 'Send Booking Request',
  co_success_title: 'Request Sent!',
  co_success_sub: "Thank you. We'll confirm your appointment within 1 hour by phone or email.",
  co_book_another: 'Book Another',
  co_hours_title: 'Working Hours',
  co_help: 'Need help with your booking?',
  bk_title: 'Book Your Service',
  bk_step1: 'Vehicle',
  bk_step2: 'Service',
  bk_step3: 'Schedule',
  bk_step4: 'Confirm',
  bk_vehicle_title: 'Vehicle Information',
  bk_vehicle_sub: "Tell us what you're driving so we can find the right tyres for you.",
  bk_tab_plate: 'License Plate',
  bk_tab_manual: 'Manual Entry',
  bk_plate_label: 'Registration Number',
  bk_plate_placeholder: '1-ABC-001',
  bk_find_btn: 'FIND',
  bk_plate_hint: "We'll automatically identify your vehicle's tyre specs.",
  bk_make: 'Make',
  bk_model: 'Model',
  bk_year: 'Year',
  bk_trim: 'Trim',
  bk_select_make: 'Select Make',
  bk_select_model: 'Select Model',
  bk_select_year: 'Select Year',
  bk_select_trim: 'Select Trim',
  bk_back: 'Back',
  bk_continue: 'Continue to Services',
  bk_summary_title: 'Booking Summary',
  bk_vehicle_label: 'Selected Vehicle',
  bk_vehicle_empty: 'Not identified yet',
  bk_services_label: 'Selected Services',
  bk_fitting_fee: 'Standard Fitting Fee',
  bk_subtotal: 'Subtotal',
  bk_tax: 'Estimated Tax (10%)',
  bk_total: 'Total Estimate',
  bk_disclaimer: 'Price includes disposal of old tyres and new valve stems. Final price may vary based on selected tyre brands.',
  bk_need_help: 'Need help with your booking?',
  bk_partners_title: 'Our Premium Partners',
  bk_service_title: 'Select Your Services',
  bk_service_sub: 'Choose one or more services for your appointment.',
  bk_schedule_title: 'Choose a Date & Time',
  bk_schedule_sub: 'Pick a time slot that works for you.',
  bk_confirm_title: 'Confirm Your Booking',
  bk_confirm_sub: 'Review your details and confirm your appointment.',
  bk_confirm_btn: 'Confirm Booking',
  bk_confirmed_title: 'Booking Confirmed!',
  bk_confirmed_sub: "You'll receive a confirmation by SMS and email shortly.",
  bk_new_booking: 'New Booking',
  tm_badge: 'Technical Guide',
  tm_h1: 'How to Read Your Tyre Sidewall Markings',
  tm_sub: "Your tyre's sidewall contains important information about its size, performance, and safety limits. Understanding these markings helps you choose the correct replacement tyres.",
  tm_download: 'Download PDF Guide',
  tm_breakdown_title: 'Detailed Marking Breakdown',
  tm_width: 'Tyre Width',
  tm_width_desc: 'The width of the tyre in millimetres, measured from sidewall to sidewall.',
  tm_aspect: 'Aspect Ratio',
  tm_aspect_desc: "The height of the tyre's sidewall as a percentage of its width. An aspect ratio of 55 means the height is 55% of its width.",
  tm_diameter: 'Wheel Diameter',
  tm_diameter_desc: 'The diameter of the wheel (rim) in inches on which the tyre is designed to fit.',
  tm_load: 'Load Index',
  tm_load_desc: 'Shows the maximum weight the tyre can safely carry. A load index of 91 corresponds to 615 kg per tyre.',
  tm_load_note: "Always check your vehicle manufacturer's recommendations when selecting tyres.",
  tm_speed: 'Speed Rating',
  tm_speed_desc: 'Indicates the maximum speed the tyre can safely handle. A rating of V means up to 240 km/h.',
  tm_speed_note: "Ensure new tyres match or exceed your manufacturer's specifications.",
  tm_shop_title: 'Ready to Shop?',
  tm_shop_sub: 'Now that you know your size, find the perfect match for your vehicle.',
  tm_shop_btn: 'Browse Tyres by Size',
  tm_speed_chart_title: 'Speed Rating Chart',
  tm_speed_chart_sub: 'Common speed symbols found on passenger car tyres and their corresponding maximum speeds.',
  login_title: 'Welcome Back',
  login_sub: 'Sign in to your Tyre-Express account',
  login_email: 'Email Address',
  login_password: 'Password',
  login_remember: 'Remember me',
  login_forgot: 'Forgot password?',
  login_btn: 'Sign In',
  login_no_account: "Don't have an account? Contact us",
  oh_title: 'Opening Hours',
  oh_sub: 'We are available 6 days a week for your convenience.',
  oh_open: 'Open',
  oh_closed: 'Closed',
  oh_today: 'Today',

  home_svc_change_title: 'Tire Change',
  home_svc_change_desc: 'On-site replacement of summer, winter, or all-season tires for any vehicle.',
  home_svc_balance_title: 'Balancing',
  home_svc_balance_desc: 'State-of-the-art computer balancing to ensure a smooth, vibration-free ride.',
  home_svc_rim_title: 'Rim Repair',
  home_svc_rim_desc: 'Fixing curbside damage, scratches, and minor dents on your alloy wheels.',
  home_svc_swap_title: 'Winter/Summer Swap',
  home_svc_swap_desc: 'Seasonal changeovers and storage solutions for your off-season sets.',
  bk_svc_change_title: 'Tire Change',
  bk_svc_change_desc: 'On-site replacement of all tire types.',
  bk_svc_balance_title: 'Wheel Balancing',
  bk_svc_balance_desc: 'Computer balancing for a vibration-free ride.',
  bk_svc_rim_title: 'Rim Repair',
  bk_svc_rim_desc: 'Fix scratches and dents on alloy wheels.',
  bk_svc_swap_title: 'Seasonal Swap',
  bk_svc_swap_desc: 'Winter/summer changeover with storage.',
  day_mon: 'Mon', day_tue: 'Tue', day_wed: 'Wed', day_thu: 'Thu',
  day_fri: 'Fri', day_sat: 'Sat', day_sun: 'Sun',
  day_monday: 'Monday', day_tuesday: 'Tuesday', day_wednesday: 'Wednesday',
  day_thursday: 'Thursday', day_friday: 'Friday', day_saturday: 'Saturday', day_sunday: 'Sunday',
  bk_reg_number: 'Registration Number',

  sp_svc_change_title: 'Tire Change', sp_svc_change_desc: 'On-site replacement of summer, winter, or all-season tires for any vehicle. Our technicians handle everything from removal to fitting and torquing.',
  sp_svc_change_f1: 'All vehicle types', sp_svc_change_f2: 'Same-day service', sp_svc_change_f3: 'OEM-spec torque settings', sp_svc_change_f4: 'TPMS sensor check',
  sp_svc_balance_title: 'Wheel Balancing', sp_svc_balance_desc: 'State-of-the-art computer balancing to ensure a smooth, vibration-free ride. Eliminates uneven tire wear and extends the life of your tires.',
  sp_svc_balance_f1: 'Digital computerized balancing', sp_svc_balance_f2: 'Eliminates vibration', sp_svc_balance_f3: 'Extends tire lifespan', sp_svc_balance_f4: 'Improves fuel efficiency',
  sp_svc_rim_title: 'Rim Repair', sp_svc_rim_desc: 'Fixing curbside damage, scratches, and minor dents on your alloy wheels. Restore your rims to their original condition without expensive replacements.',
  sp_svc_rim_f1: 'Alloy & steel rims', sp_svc_rim_f2: 'Scratch & dent repair', sp_svc_rim_f3: 'Cosmetic refinishing', sp_svc_rim_f4: 'Same session as tire service',
  sp_svc_swap_title: 'Winter / Summer Swap', sp_svc_swap_desc: 'Seasonal changeovers and storage solutions for your off-season tire sets. Never worry about getting caught in the wrong tires.',
  sp_svc_swap_f1: 'Storage included', sp_svc_swap_f2: 'Seasonal reminders', sp_svc_swap_f3: 'Full balancing included', sp_svc_swap_f4: 'Fleet packages available',
  header_login: 'Login',
  bk_date_label: 'Select a Date',
  bk_time_label: 'Select a Time',

};

const NL: Translations = {
  nav_services: 'Diensten',
  nav_how_it_works: 'Hoe het werkt',
  nav_service_area: 'Servicegebied',
  nav_about: 'Over ons',
  nav_contact: 'Contact',
  nav_tyre_guide: 'Bandengids',
  nav_book: 'Afspraak maken',
  nav_call: 'Bel nu',
  header_book: 'Afspraak maken',
  footer_tagline: 'De toonaangevende mobiele bandendienst in Oost-Vlaanderen. Wij combineren technologie en expertise om veiligheid aan uw deur te leveren.',
  footer_quick_links: 'Snelle links',
  footer_support: 'Ondersteuning',
  footer_contact_us: 'Contacteer ons',
  footer_faq: 'Veelgestelde vragen',
  footer_service_area: 'Servicegebied',
  footer_contact: 'Contact',
  footer_terms: 'Algemene voorwaarden',
  footer_privacy: 'Privacybeleid',
  footer_cookie: 'Cookiebeleid',
  footer_rights: 'Alle rechten voorbehouden.',
  footer_about: 'Over ons',
  footer_services: 'Diensten',
  footer_how: 'Hoe het werkt',
  footer_pricing: 'Prijzen',
  footer_hours: 'Openingstijden',
  home_badge: 'Mobiele service in heel België',
  home_h1_1: 'Professionele mobiele',
  home_h1_accent: 'bandendienst',
  home_h1_2: 'aan uw deur',
  home_h1_sub: 'Premium montage, balancering en reparatie van banden in heel België. Wij brengen de garage naar uw thuis, kantoor of langs de weg.',
  home_book_btn: 'Afspraak maken',
  home_social_proof: 'van 2k+ bestuurders',
  vp_time_title: 'Tijd besparen',
  vp_time_desc: 'Geen wachtkamer. Wij werken terwijl u leeft.',
  vp_mobile_title: 'Mobiele service',
  vp_mobile_desc: 'Volledig uitgeruste mobiele units komen rechtstreeks naar u toe.',
  vp_quality_title: 'Premium kwaliteit',
  vp_quality_desc: 'Gecertificeerde technici en topmateriaal.',
  vp_eco_title: 'Milieuvriendelijk',
  vp_eco_desc: 'Verantwoord recyclen van banden en efficiënte routes.',
  services_title: 'Onze diensten',
  services_sub: 'Uitgebreide bandenoplossingen ter plaatse, met precisie en zorg geleverd.',
  services_learn_more: 'Meer weten',
  services_view_all: 'Alle diensten bekijken',
  how_title: 'Hoe het werkt',
  how_1_title: 'Online boeken',
  how_1_desc: 'Kies uw dienst en een tijdslot dat in uw schema past.',
  how_2_title: 'Wij komen naar u toe',
  how_2_desc: 'Onze mobiele werkplaats arriveert op uw locatie met alles wat nodig is.',
  how_3_title: 'Weer op de weg',
  how_3_desc: 'Service voltooid in minder dan 45 minuten. Klaar voor uw volgende rit.',
  testimonials_title: 'Klantbeoordelingen',
  cta_title: 'Klaar voor een probleemloze bandendienst?',
  cta_sub: 'Verspil geen tijd in de garage. Laat ons de expertise vandaag naar u brengen.',
  cta_book: 'Uw afspraak boeken',
  cta_support: 'Klantenservice',
  sp_badge: 'Wat wij bieden',
  sp_h1: 'Onze diensten',
  sp_sub: 'Uitgebreide bandenoplossingen ter plaatse, waar u ook bent in België.',
  sp_book_service: 'Deze dienst boeken',
  hiw_badge: 'Eenvoudig & snel',
  hiw_h1: 'Hoe het werkt',
  hiw_sub: 'Van boeking tot weer op de weg — in minder dan 45 minuten.',
  hiw_faq_title: 'Veelgestelde vragen',
  hiw_book_btn: 'Nu een afspraak maken',
  sa_badge: 'Dekking',
  sa_h1: 'Servicegebied',
  sa_sub: 'Wij bedienen trots Oost-Vlaanderen en de omliggende regio\'s in heel België.',
  sa_covered: 'Gedekte gemeenten',
  sa_not_listed_title: 'Niet op de lijst?',
  sa_not_listed_sub: 'Neem contact op — wij kunnen u wellicht toch bereiken.',
  sa_check: 'Controleren',
  sa_covered_badge: 'Gedekt',
  ab_badge: 'Wie wij zijn',
  ab_h1: 'Over Tyre-Express',
  ab_sub: 'De meest vertrouwde mobiele bandendienst van België, gebouwd op expertise, snelheid en gemak.',
  ab_story_title: 'Ons verhaal',
  ab_story_p1: 'Tyre-Express is opgericht met een eenvoudige missie: de frustratie van traditionele bandengarages elimineren. Lange wachttijden, onhandige locaties en verloren productiviteit — wij zagen een betere manier.',
  ab_story_p2: 'Gevestigd in Lede, Oost-Vlaanderen, bedienen onze mobiele teams jaarlijks duizenden bestuurders in heel België. Van één bestelwagen zijn we uitgegroeid tot een vertrouwde vloot van gecertificeerde technici.',
  ab_values_title: 'Onze waarden',
  ab_cta: 'Werk met ons',
  co_badge: 'Neem contact op',
  co_h1: 'Boek of contacteer ons',
  co_sub: 'Klaar om een dienst te plannen, of heeft u een vraag? Wij helpen u graag.',
  co_form_title: 'Een afspraak maken',
  co_form_sub: 'Vul uw gegevens in en wij bevestigen uw tijdslot binnen 1 uur.',
  co_name: 'Volledige naam',
  co_phone: 'Telefoonnummer',
  co_email: 'E-mailadres',
  co_service: 'Dienst',
  co_service_placeholder: 'Kies een dienst…',
  co_date: 'Gewenste datum',
  co_location: 'Locatie / Adres',
  co_location_placeholder: 'Hoofdstraat 12, Gent',
  co_message: 'Bericht (optioneel)',
  co_message_placeholder: 'Voertuigtype, opmerkingen…',
  co_submit: 'Aanvraag versturen',
  co_success_title: 'Aanvraag verzonden!',
  co_success_sub: 'Bedankt. Wij bevestigen uw afspraak binnen 1 uur per telefoon of e-mail.',
  co_book_another: 'Nog een boeking',
  co_hours_title: 'Openingstijden',
  co_help: 'Hulp nodig bij uw boeking?',
  bk_title: 'Uw service boeken',
  bk_step1: 'Voertuig',
  bk_step2: 'Dienst',
  bk_step3: 'Planning',
  bk_step4: 'Bevestigen',
  bk_vehicle_title: 'Voertuiginformatie',
  bk_vehicle_sub: 'Vertel ons wat u rijdt zodat wij de juiste banden voor u kunnen vinden.',
  bk_tab_plate: 'Kentekenplaat',
  bk_tab_manual: 'Handmatige invoer',
  bk_plate_label: 'Kentekennummer',
  bk_plate_placeholder: '1-ABC-001',
  bk_find_btn: 'ZOEKEN',
  bk_plate_hint: 'Wij identificeren automatisch de bandenspecificaties van uw voertuig.',
  bk_make: 'Merk',
  bk_model: 'Model',
  bk_year: 'Jaar',
  bk_trim: 'Versie',
  bk_select_make: 'Kies merk',
  bk_select_model: 'Kies model',
  bk_select_year: 'Kies jaar',
  bk_select_trim: 'Kies versie',
  bk_back: 'Terug',
  bk_continue: 'Verder naar diensten',
  bk_summary_title: 'Boekingsoverzicht',
  bk_vehicle_label: 'Geselecteerd voertuig',
  bk_vehicle_empty: 'Nog niet geïdentificeerd',
  bk_services_label: 'Geselecteerde diensten',
  bk_fitting_fee: 'Standaard montagekosten',
  bk_subtotal: 'Subtotaal',
  bk_tax: 'Geschatte belasting (10%)',
  bk_total: 'Totale schatting',
  bk_disclaimer: 'Prijs inclusief verwijdering van oude banden en nieuwe ventielstelen. Definitieve prijs kan variëren op basis van het gekozen bandenmerk.',
  bk_need_help: 'Hulp nodig bij uw boeking?',
  bk_partners_title: 'Onze premium partners',
  bk_service_title: 'Kies uw diensten',
  bk_service_sub: 'Kies een of meer diensten voor uw afspraak.',
  bk_schedule_title: 'Kies datum & tijdstip',
  bk_schedule_sub: 'Kies een tijdslot dat voor u werkt.',
  bk_confirm_title: 'Boeking bevestigen',
  bk_confirm_sub: 'Controleer uw gegevens en bevestig uw afspraak.',
  bk_confirm_btn: 'Boeking bevestigen',
  bk_confirmed_title: 'Boeking bevestigd!',
  bk_confirmed_sub: 'U ontvangt binnenkort een bevestiging per sms en e-mail.',
  bk_new_booking: 'Nieuwe boeking',
  tm_badge: 'Technische gids',
  tm_h1: 'Hoe u de markeringen op uw bandenzijwand kunt lezen',
  tm_sub: 'De zijwand van uw band bevat belangrijke informatie over de maat, prestaties en veiligheidslimieten. Inzicht in deze markeringen helpt u de juiste vervangingsbanden te kiezen.',
  tm_download: 'PDF-gids downloaden',
  tm_breakdown_title: 'Gedetailleerde markering uitleg',
  tm_width: 'Bandenbreedte',
  tm_width_desc: 'De breedte van de band in millimeter, gemeten van zijwand tot zijwand.',
  tm_aspect: 'Aspectverhouding',
  tm_aspect_desc: 'De hoogte van de zijwand als percentage van de breedte. Een aspectverhouding van 55 betekent dat de hoogte 55% van de breedte is.',
  tm_diameter: 'Wieldiameter',
  tm_diameter_desc: 'De diameter van het wiel (velg) in inches waarop de band is ontworpen.',
  tm_load: 'Draagvermogenindex',
  tm_load_desc: 'Geeft het maximale gewicht aan dat de band veilig kan dragen. Index 91 staat voor 615 kg per band.',
  tm_load_note: 'Controleer altijd de aanbevelingen van uw voertuigfabrikant bij het selecteren van banden.',
  tm_speed: 'Snelheidssymbool',
  tm_speed_desc: 'Geeft de maximale snelheid aan waarvoor de band is goedgekeurd. Rating V staat voor maximaal 240 km/u.',
  tm_speed_note: 'Zorg ervoor dat nieuwe banden voldoen aan of de specificaties van de fabrikant overschrijden.',
  tm_shop_title: 'Klaar om te winkelen?',
  tm_shop_sub: 'Nu u uw maat kent, vindt u de perfecte match voor uw voertuig.',
  tm_shop_btn: 'Banden zoeken op maat',
  tm_speed_chart_title: 'Snelheidssymbool tabel',
  tm_speed_chart_sub: 'Veelvoorkomende snelheidssymbolen op personenauto-banden en de overeenkomstige maximumsnelheden.',
  login_title: 'Welkom terug',
  login_sub: 'Meld u aan bij uw Tyre-Express account',
  login_email: 'E-mailadres',
  login_password: 'Wachtwoord',
  login_remember: 'Onthoud mij',
  login_forgot: 'Wachtwoord vergeten?',
  login_btn: 'Aanmelden',
  login_no_account: 'Geen account? Contacteer ons',
  oh_title: 'Openingstijden',
  oh_sub: 'Wij zijn 6 dagen per week beschikbaar voor uw gemak.',
  oh_open: 'Open',
  oh_closed: 'Gesloten',
  oh_today: 'Vandaag',

  home_svc_change_title: 'Bandenwisseling',
  home_svc_change_desc: 'Ter plaatse vervangen van zomer-, winter- of all-season banden voor elk voertuig.',
  home_svc_balance_title: 'Balancering',
  home_svc_balance_desc: 'Computerbalancering voor een soepele, trillingsvrije rit.',
  home_svc_rim_title: 'Velgreparatie',
  home_svc_rim_desc: 'Herstel van rijschade, krassen en kleine deuken op uw velgen.',
  home_svc_swap_title: 'Winter/Zomerwisseling',
  home_svc_swap_desc: 'Seizoenswisselingen en opslagoplossingen voor uw banden.',
  bk_svc_change_title: 'Bandenwisseling',
  bk_svc_change_desc: 'Ter plaatse vervangen van alle bandentypen.',
  bk_svc_balance_title: 'Wielbalancering',
  bk_svc_balance_desc: 'Computerbalancering voor een trillingsvrije rit.',
  bk_svc_rim_title: 'Velgreparatie',
  bk_svc_rim_desc: 'Herstel krassen en deuken op velgen.',
  bk_svc_swap_title: 'Seizoenswisseling',
  bk_svc_swap_desc: 'Winter/zomer wisseling met opslag.',
  day_mon: 'Ma', day_tue: 'Di', day_wed: 'Wo', day_thu: 'Do',
  day_fri: 'Vr', day_sat: 'Za', day_sun: 'Zo',
  day_monday: 'Maandag', day_tuesday: 'Dinsdag', day_wednesday: 'Woensdag',
  day_thursday: 'Donderdag', day_friday: 'Vrijdag', day_saturday: 'Zaterdag', day_sunday: 'Zondag',
  bk_reg_number: 'Kentekennummer',

  sp_svc_change_title: 'Bandenwisseling', sp_svc_change_desc: 'Ter plaatse vervangen van zomer-, winter- of all-season banden voor elk voertuig. Onze technici regelen alles van verwijdering tot montage en aandraaien.',
  sp_svc_change_f1: 'Alle voertuigtypes', sp_svc_change_f2: 'Same-day service', sp_svc_change_f3: 'OEM aandraaimoment', sp_svc_change_f4: 'TPMS sensorcheck',
  sp_svc_balance_title: 'Wielbalancering', sp_svc_balance_desc: 'Computerbalancering voor een soepele, trillingsvrije rit. Vermindert ongelijkmatige bandenslijtage en verlengt de levensduur van uw banden.',
  sp_svc_balance_f1: 'Digitale computerbalancering', sp_svc_balance_f2: 'Elimineert trillingen', sp_svc_balance_f3: 'Verlengt bandlevensduur', sp_svc_balance_f4: 'Verbetert brandstofverbruik',
  sp_svc_rim_title: 'Velgreparatie', sp_svc_rim_desc: 'Herstel van rijschade, krassen en kleine deuken op uw velgen. Herstel uw velgen naar hun oorspronkelijke staat zonder dure vervangingen.',
  sp_svc_rim_f1: 'Aluminium & stalen velgen', sp_svc_rim_f2: 'Kras- en deukrsherstel', sp_svc_rim_f3: 'Cosmetische afwerking', sp_svc_rim_f4: 'Gecombineerd met bandenservice',
  sp_svc_swap_title: 'Winter / Zomerwisseling', sp_svc_swap_desc: 'Seizoenswisselingen en opslagoplossingen voor uw bandensetten. Nooit meer de verkeerde banden op het verkeerde moment.',
  sp_svc_swap_f1: 'Opslag inbegrepen', sp_svc_swap_f2: 'Seizoensherinneringen', sp_svc_swap_f3: 'Balancering inbegrepen', sp_svc_swap_f4: 'Vlootpakketten beschikbaar',
  header_login: 'Inloggen',
  bk_date_label: 'Kies een datum',
  bk_time_label: 'Kies een tijdstip',

};

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private _lang = signal<Lang>('en');

  get lang() { return this._lang(); }
  get langSignal() { return this._lang; }

  get t(): Translations {
    return this._lang() === 'en' ? EN : NL;
  }

  setLang(lang: Lang) {
    this._lang.set(lang);
    localStorage.setItem('tyre_lang', lang);
  }

  init() {
    const saved = localStorage.getItem('tyre_lang') as Lang;
    if (saved === 'en' || saved === 'nl') this._lang.set(saved);
  }
}
