"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Phone, Mail, MapPin, Instagram, PlayCircle, ChevronRight, Award, Star, Check, X, MessageCircle, Send } from 'lucide-react';

// Mobile detection utility
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth < 768
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'photos' | 'reels'>('reels');
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('party');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const isMobile = useIsMobile();

  const handleWhatsAppClick = (service?: string) => {
    const phoneNumber = "916264530223";
    let message = "";
    
    if (service) {
      message = `Hi Suhani! I'm interested in your ${service} services. Could you please provide more details about the packages and availability?`;
    } else {
      message = "Hi Suhani! I'm interested in your makeup services. Could you please provide more information?";
    }
    
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const servicesData = {
    signature: {
      id: 'signature',
      title: "Signature Party Glam",
      description: "Your complete party-ready glam in one premium package. Elevate your look with our signature all-inclusive experience.",
      pricing: [
        { label: "Complete Package", price: "₹2,200", description: "Premium all-inclusive party glam package" }
      ],
      includes: [
        "Professional Makeup",
        "Hairstyle",
        "Contact Lenses",
        "Eyelashes",
        "Dupatta Draping"
      ],
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761688349/glam_mzjl9i.jpg",
      featured: true,
      note: ""
    },
    party: {
      id: 'party',
      title: "Party Makeup",
      description: "Look stunning at any party or social gathering with our glamorous party makeup. Perfect for birthdays, cocktail parties, and special celebrations.",
      pricing: [
        { label: "Without eyelashes", price: "₹1,600", description: "Complete party look with makeup, hairstyle, and dupatta draping" },
        { label: "With eyelashes", price: "₹1,700", description: "Enhanced look with premium eyelashes included" },
        { label: "Eyelashes only (add-on)", price: "₹100", description: "Add premium eyelashes to any look" }
      ],
      includes: ["Professional Makeup Application", "Hairstyle", "Dupatta Draping"],
      note: "Saree draping available at extra charge",
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761688349/party_b0vw5v.jpg",
      featured: false
    },
    haldi: {
      id: 'haldi',
      title: "Haldi / Mehendi Makeup",
      description: "Bright, cheerful makeup perfect for pre-wedding ceremonies. Designed to look fresh and vibrant in natural daylight and traditional attire.",
      pricing: [
        { label: "Complete Package", price: "₹3,000", description: "Everything you need for a perfect Haldi/Mehendi look" },
        { label: "Contact Lenses (add-on)", price: "₹250", description: "High-quality contact lenses for a dramatic eye transformation" }
      ],
      includes: ["HD Makeup Application", "Traditional Hairstyle", "Premium Eyelashes", "Dupatta Draping"],
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761688350/haldi_fknijh.png",
      featured: false,
      note: ""
    },
    sangeet: {
      id: 'sangeet',
      title: "Sangeet Makeup",
      description: "Glamorous and dance-ready makeup that stays perfect through all the celebrations. Designed for stage lighting and hours of festivities.",
      pricing: [
        { label: "Complete Package", price: "₹4,000", description: "Full sangeet glam with long-lasting formula" }
      ],
      includes: ["HD Makeup Application", "Glamorous Hairstyle", "Premium Eyelashes", "Dupatta Draping"],
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761689013/sangeet_g4yv6x.png",
      featured: false,
      note: ""
    },
    engagement: {
      id: 'engagement',
      title: "Engagement Makeup",
      description: "Elegant and sophisticated makeup for your special engagement ceremony. A perfect balance of traditional and contemporary style.",
      pricing: [
        { label: "Complete Package", price: "₹6,000", description: "Premium engagement look with all accessories" }
      ],
      includes: ["HD Professional Makeup", "Elegant Hairstyle", "Premium Eyelashes", "Dupatta Draping"],
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761688351/engagement_gzisdh.png",
      featured: false,
      note: ""
    },
    bridal: {
      id: 'bridal',
      title: "Bridal Makeup",
      description: "The ultimate bridal experience with HD makeup that looks flawless in person and photographs beautifully. Every bride deserves to look and feel exceptional.",
      pricing: [
        { label: "HD Bridal Package", price: "₹12,000", description: "Complete bridal transformation with premium products and techniques" }
      ],
      includes: [
        "HD Bridal Makeup (Camera Ready)",
        "Traditional Bridal Hairstyle",
        "Bridal Dupatta Setting",
        "Premium Eyelashes",
        "Contact Lenses"
      ],
      featured: true,
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761689014/bridal1_rrgpjn.png",
      note: ""
    },
    reception: {
      id: 'reception',
      title: "Reception Makeup",
      description: "Stunning reception makeup that combines elegance with modern style. Perfect for photographs and the grand entrance.",
      pricing: [
        { label: "Complete Package", price: "₹4,000", description: "Full reception glam look" }
      ],
      includes: ["HD Makeup Application", "Modern Hairstyle", "Premium Eyelashes", "Dupatta Draping"],
      image: "https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_800,c_scale/v1761688658/reception_naq4jy.png",
      featured: false,
      note: ""
    }
  };

  const servicesList = [
    { id: 'signature', label: '✨ Signature Party Glam', featured: true },
    { id: 'party', label: 'Party Makeup', featured: false },
    { id: 'haldi', label: 'Haldi / Mehendi', featured: false },
    { id: 'sangeet', label: 'Sangeet', featured: false },
    { id: 'engagement', label: 'Engagement', featured: false },
    { id: 'bridal', label: 'Bridal Makeup', featured: true },
    { id: 'reception', label: 'Reception', featured: false }
  ];

  const combos = [
    {
      title: "Haldi + Sangeet",
      regular: "7,000",
      offer: "6,500",
      tag: "SAVE ₹500"
    },
    {
      title: "Complete Wedding Package",
      subtitle: "Haldi + Mehendi + Sangeet + Bridal",
      regular: "22,000",
      offer: "19,000",
      tag: "SAVE ₹3,000",
      popular: true
    },
    {
      title: "Haldi + Sangeet + Bridal",
      regular: "19,000",
      offer: "17,500",
      tag: "SAVE ₹1,500"
    },
    {
      title: "Bridal + Reception",
      regular: "16,000",
      offer: "15,000",
      tag: "SAVE ₹1,000"
    }
  ];

  const galleryImages = [
    "https://images.pexels.com/photos/1070967/pexels-photo-1070967.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/3812011/pexels-photo-3812011.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/8129903/pexels-photo-8129903.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1200",
  ];

  const reels = [
    { video: "https://res.cloudinary.com/dwoifav4o/video/upload/v1761686749/r12_uarolx.mp4", title: "Bridal Transformation" },
    { video: "https://res.cloudinary.com/dwoifav4o/video/upload/v1761686752/r13_i1c5wf.mp4", title: "Party Glam" },
    { video: "https://res.cloudinary.com/dwoifav4o/video/upload/v1761686765/r14_kanhwd.mp4", title: "Engagement Look" },
    { video: "https://res.cloudinary.com/dwoifav4o/video/upload/v1761686765/r15_aia9oj.mp4", title: "Mehendi Magic" }
  ];

  const currentService = servicesData[selectedService as keyof typeof servicesData];

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/30 to-white text-gray-900 min-h-screen">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-amber-200/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-2 md:py-5 flex items-center justify-between">
          <div className="text-lg md:text-3xl font-royal tracking-wider">
            <span className="text-amber-600">Suhani</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase font-medium">
            <a href="#services" className="hover:text-amber-600 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-amber-600 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
          </div>
          <Button 
            onClick={() => handleWhatsAppClick()} 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-2 md:px-6 py-1 md:py-2 shadow-lg text-xs md:text-sm"
          >
            <MessageCircle className="mr-1 md:mr-2 w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">Book on WhatsApp</span>
            <span className="sm:hidden">Book</span>
          </Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* white overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80 z-20"></div>

          {/* Background video for desktop/laptop view */}
          {!isMobile && (
            <video
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              disablePictureInPicture
              controlsList="nodownload noplaybackrate noremoteplayback"
              className="w-full h-full object-cover">
              <source
                src="https://res.cloudinary.com/dwoifav4o/video/upload/q_auto:good,f_auto,w_1080,c_scale/hero_mraobv.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          )}

          {/* Background image for mobile view */}
          {isMobile && (
            <img
              src="https://res.cloudinary.com/dwoifav4o/image/upload/v1761682928/WhatsApp_Image_2025-10-28_at_22.12.43_ff5ec461_tkdkal.jpg"
              alt="Suhani Makeup Artist"
              className="w-full h-full object-cover"
            />
          )}

          {/* subtle amber wash */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/10 via-transparent to-amber-100/10 z-30"></div>
        </div>

        <div className="relative z-20 text-center px-3 md:px-6 max-w-5xl">
          <div className="mb-4 md:mb-8 inline-flex items-center gap-1 md:gap-3 px-3 md:px-6 py-1.5 md:py-3 bg-white/80 backdrop-blur-md border border-amber-300/50 md:border-2 rounded-full text-amber-700 text-[10px] md:text-sm font-medium shadow-lg">
            <Award className="w-3 h-3 md:w-5 md:h-5" />
            <span className="tracking-wide">Certified Professional Makeup Artist</span>
          </div>

          <h1 className="font-royal text-5xl md:text-9xl mb-4 md:mb-8 tracking-wide leading-none">
            <span className="block text-amber-600">Suhani</span>
          </h1>

          <div className="mb-3 md:mb-6">
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-3 md:mb-6"></div>
          </div>

          <p className="text-base md:text-3xl text-gray-700 mb-3 md:mb-6 font-serif italic tracking-wide">
            Your Canvas, Our Creation
          </p>

          <p className="text-gray-600 mb-6 md:mb-12 max-w-2xl mx-auto leading-relaxed text-xs md:text-lg px-4">
            Specializing in HD professional makeup for bridal, engagement, and special occasions.
            Creating timeless looks that are camera-ready and long-lasting.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-6 justify-center">
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('services');
                const yOffset = -100;
                const y = element ? element.getBoundingClientRect().top + window.pageYOffset + yOffset : 0;
                window.scrollTo({top: y, behavior: 'smooth'});
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-4 md:px-10 py-2 md:py-7 text-xs md:text-base shadow-xl rounded-md flex items-center"
            >
              Explore Services
              <ChevronRight className="ml-1 md:ml-2 w-3 h-3 md:w-5 md:h-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                const element = document.getElementById('portfolio');
                const yOffset = -100;
                const y = element ? element.getBoundingClientRect().top + window.pageYOffset + yOffset : 0;
                window.scrollTo({top: y, behavior: 'smooth'});
              }}
              className="border border-amber-500 md:border-2 text-amber-700 hover:bg-amber-500 hover:text-white px-4 md:px-10 py-2 md:py-7 text-xs md:text-base shadow-xl bg-white rounded-md"
            >
              View Portfolio
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <ChevronRight className="w-6 h-6 text-amber-600 rotate-90" />
        </div>
      </section>

      <section id="services" className="py-12 md:py-32 px-3 md:px-6 relative bg-gradient-to-b from-white via-amber-50/20 to-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-20">
            <p className="text-amber-600 text-[10px] md:text-sm tracking-widest uppercase mb-3 md:mb-6 font-semibold">What I Offer</p>
            <h2 className="font-royal text-3xl md:text-7xl mb-3 md:mb-6 text-gray-800">Services & Pricing</h2>
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>

          <Tabs value={selectedService} onValueChange={setSelectedService} className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-1.5 md:gap-3 bg-transparent mb-6 md:mb-16 h-auto">
              {servicesList.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="relative px-3 md:px-8 py-1.5 md:py-4 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-amber-600 data-[state=active]:text-white bg-white text-gray-600 hover:text-gray-900 transition-all shadow-md border border-amber-200/50 font-medium text-[10px] md:text-sm"
                >
                  {service.label}
                  {service.featured && (
                    <Star className="w-2 h-2 md:w-4 md:h-4 ml-1 md:ml-2 inline fill-current" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.values(servicesData).map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid lg:grid-cols-2 gap-6 md:gap-16 items-start max-w-6xl mx-auto">
                  <div className="relative rounded-xl md:rounded-3xl overflow-hidden group shadow-2xl">
                    <div className="aspect-[3/4]">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority={service.featured}
                        loading={service.featured ? "eager" : "lazy"}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        quality={90}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent"></div>
                    {service.featured && (
                      <div className="absolute top-2 right-2 md:top-6 md:right-6 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-2 py-1 md:px-6 md:py-3 rounded-full text-[9px] md:text-sm font-bold flex items-center gap-1 md:gap-2 shadow-xl">
                        <Star className="w-2 h-2 md:w-4 md:h-4 fill-white" />
                        MOST POPULAR
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 md:space-y-8">
                    <div>
                      <h3 className="font-royal text-2xl md:text-5xl mb-3 md:mb-6 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-xs md:text-lg">{service.description}</p>
                    </div>

                    <div className="space-y-2 md:space-y-4">
                      <h4 className="text-sm md:text-2xl font-semibold text-amber-600 flex items-center gap-1 md:gap-3">
                        <Sparkles className="w-3 h-3 md:w-6 md:h-6" />
                        Pricing Options
                      </h4>
                      {service.pricing.map((price, idx) => (
                        <div key={idx} className="p-3 md:p-6 rounded-xl md:rounded-2xl bg-white border border-amber-200/50 md:border-2 hover:border-amber-400 hover:shadow-xl transition-all">
                          <div className="flex items-center justify-between mb-1 md:mb-3">
                            <span className="font-semibold text-gray-800 text-xs md:text-lg">{price.label}</span>
                            <span className="text-lg md:text-3xl font-bold text-amber-600">{price.price}</span>
                          </div>
                          <p className="text-[10px] md:text-sm text-gray-600">{price.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 md:space-y-4">
                      <h4 className="text-sm md:text-2xl font-semibold text-amber-600">What's Included</h4>
                      <div className="grid gap-2 md:gap-4">
                        {service.includes.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 md:gap-4">
                            <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 border border-amber-300">
                              <Check className="w-2 h-2 md:w-4 md:h-4 text-amber-600" />
                            </div>
                            <span className="text-gray-700 text-[10px] md:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {service.note && (
                      <p className="text-[10px] md:text-sm text-gray-500 italic bg-amber-50 p-2 md:p-4 rounded-lg md:rounded-xl border border-amber-200">{service.note}</p>
                    )}

                    <Button 
                      size="lg" 
                      onClick={() => handleWhatsAppClick(service.title)}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-3 md:py-7 shadow-xl text-xs md:text-base"
                    >
                      <MessageCircle className="mr-1 md:mr-2 w-3 h-3 md:w-5 md:h-5" />
                      Book on WhatsApp
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 md:mt-32">
            <div className="text-center mb-6 md:mb-16">
              <p className="text-amber-600 text-[10px] md:text-sm tracking-widest uppercase mb-3 md:mb-6 font-semibold">Special Offers</p>
              <h3 className="font-royal text-2xl md:text-6xl mb-3 md:mb-6 text-gray-800">Combo Packages</h3>
              <div className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
              {combos.map((combo, idx) => (
                <div
                  key={idx}
                  className={`relative p-4 md:p-10 rounded-xl md:rounded-3xl border md:border-2 ${combo.popular ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-white shadow-2xl' : 'border-amber-200 bg-white shadow-lg'} backdrop-blur-sm hover:border-amber-500 hover:shadow-2xl transition-all duration-300`}
                >
                  {combo.popular && (
                    <div className="absolute -top-2 md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 md:px-6 md:py-2 rounded-full text-[9px] md:text-xs font-bold flex items-center gap-1 md:gap-2 shadow-xl">
                      <Star className="w-2 h-2 md:w-4 md:h-4 fill-white" />
                      BEST VALUE
                    </div>
                  )}

                  <div className="mb-4 md:mb-8">
                    <h4 className="text-base md:text-3xl font-serif mb-1 md:mb-2 text-gray-800">{combo.title}</h4>
                    {combo.subtitle && <p className="text-[10px] md:text-sm text-gray-600 font-medium">{combo.subtitle}</p>}
                  </div>

                  <div className="flex items-end gap-3 md:gap-6 mb-3 md:mb-6">
                    <div>
                      <div className="text-[10px] md:text-sm text-gray-500 line-through mb-0.5 md:mb-1">₹{combo.regular}</div>
                      <div className="text-2xl md:text-5xl font-bold text-amber-600">₹{combo.offer}</div>
                    </div>
                    <div className="bg-green-600 text-white text-[9px] md:text-xs font-bold px-2 py-1 md:px-4 md:py-2 rounded-full mb-1 md:mb-3 shadow-lg">
                      {combo.tag}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-20 max-w-4xl mx-auto p-4 md:p-10 rounded-xl md:rounded-3xl border md:border-2 border-amber-200 bg-white shadow-xl">
            <h4 className="text-sm md:text-2xl font-royal mb-4 md:mb-8 text-amber-600">Add-On Services</h4>
            <div className="grid md:grid-cols-2 gap-3 md:gap-6">
              <div className="flex justify-between items-center p-2 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl">
                <span className="text-gray-700 font-medium text-[10px] md:text-base">Contact Lenses</span>
                <span className="text-amber-600 font-bold text-sm md:text-xl">₹250</span>
              </div>
              <div className="flex justify-between items-center p-2 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl">
                <span className="text-gray-700 font-medium text-[10px] md:text-base">Saree Draping</span>
                <span className="text-amber-600 font-bold text-sm md:text-xl">₹300</span>
              </div>
              <div className="flex justify-between items-center p-2 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl">
                <span className="text-gray-700 font-medium text-[10px] md:text-base">Floral Accessories</span>
                <span className="text-amber-600 font-bold text-sm md:text-xl">₹300</span>
              </div>
              <div className="flex justify-between items-center p-2 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl">
                <span className="text-gray-700 font-medium text-[10px] md:text-base">Morena Local Travel</span>
                <span className="text-amber-600 font-bold text-sm md:text-xl">₹500</span>
              </div>
              <div className="flex justify-between items-center p-2 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl">
                <span className="text-gray-700 font-medium text-[10px] md:text-base">Gwalior Travel</span>
                <span className="text-amber-600 font-bold text-sm md:text-xl">₹800</span>
              </div>
              <div className="flex justify-between items-center p-2 md:p-4 bg-amber-50/50 rounded-lg md:rounded-xl">
                <span className="text-gray-700 font-medium text-[10px] md:text-base">Hair Extensions (includes styling & blending)</span>
                <span className="text-amber-600 font-bold text-sm md:text-xl">₹500</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-12 md:py-32 px-3 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-20">
            <p className="text-amber-600 text-[10px] md:text-sm tracking-widest uppercase mb-3 md:mb-6 font-semibold">My Work</p>
            <h2 className="font-royal text-3xl md:text-7xl mb-3 md:mb-6 text-gray-800">Portfolio</h2>
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
          </div>

          <div className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-16">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-5 md:px-10 py-2 md:py-4 rounded-full font-semibold transition-all shadow-md text-xs md:text-base ${activeTab === 'photos' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl' : 'bg-white text-gray-600 hover:text-gray-900 border md:border-2 border-amber-200'}`}
            >
              Photos
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              className={`px-5 md:px-10 py-2 md:py-4 rounded-full font-semibold transition-all shadow-md text-xs md:text-base ${activeTab === 'reels' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xl' : 'bg-white text-gray-600 hover:text-gray-900 border md:border-2 border-amber-200'}`}
            >
              Reels
            </button>
          </div>

          {activeTab === 'photos' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {[
                'https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_600,c_scale/v1761689014/bridal1_rrgpjn.png',
                'https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_600,c_scale/v1761688349/glam_mzjl9i.jpg',
                'https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_600,c_scale/v1761688351/engagement_gzisdh.png',
                'https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_600,c_scale/v1761688349/party_b0vw5v.jpg',
                'https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_600,c_scale/v1761688658/reception_naq4jy.png',
                'https://res.cloudinary.com/dmlfywroh/image/upload/q_auto,f_auto,w_600,c_scale/v1761689013/sangeet_g4yv6x.png'
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="aspect-square overflow-hidden rounded-lg md:rounded-2xl cursor-pointer group relative shadow-lg"
                  onClick={() => setSelectedImage(img)}
                >
                  <Image
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    priority={idx < 3}
                    loading={idx < 3 ? "eager" : "lazy"}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-white drop-shadow-lg" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {reels.map((reel, idx) => (
                <div 
                  key={idx} 
                  className="group cursor-pointer"
                  onClick={() => {
                    const videoElement = document.getElementById(`reel-${idx}`) as HTMLVideoElement;
                    if (videoElement) {
                      if (videoElement.paused) {
                        // Stop all other videos first
                        reels.forEach((_, i) => {
                          if (i !== idx) {
                            const otherVideo = document.getElementById(`reel-${i}`) as HTMLVideoElement;
                            if (otherVideo) {
                              otherVideo.pause();
                              otherVideo.currentTime = 0;
                            }
                          }
                        });
                        videoElement.play();
                        setPlayingVideo(idx);
                      } else {
                        videoElement.pause();
                        videoElement.currentTime = 0;
                        setPlayingVideo(null);
                      }
                    }
                  }}
                >
                  <div className="aspect-[9/16] overflow-hidden rounded-xl md:rounded-3xl relative shadow-2xl">
                    <video
                      id={`reel-${idx}`}
                      src={reel.video}
                      preload="metadata"
                      poster={`${reel.video.replace('.mp4', '.jpg')}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      playsInline
                      muted
                      loop
                      onLoadStart={() => setVideoLoaded(true)}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent flex items-center justify-center transition-opacity duration-300 ${playingVideo === idx ? 'opacity-0' : 'group-hover:opacity-0'}`}>
                      <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                        <PlayCircle className="w-6 h-6 md:w-10 md:h-10 text-amber-600" />
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 md:mt-4 text-center text-[10px] md:text-sm text-gray-600 font-medium">{reel.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="contact" className="py-12 md:py-32 px-3 md:px-6 relative overflow-hidden bg-gradient-to-b from-white via-amber-50/30 to-white">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-6 md:mb-16">
            <p className="text-amber-600 text-[10px] md:text-sm tracking-widest uppercase mb-3 md:mb-6 font-semibold">Get In Touch</p>
            <h2 className="font-royal text-3xl md:text-7xl mb-3 md:mb-6 text-gray-800">Book Your Appointment</h2>
            <div className="w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4 md:mb-8"></div>
            <p className="text-gray-600 text-xs md:text-lg">Transform your special day with professional makeup artistry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-16">
            <a 
              href="https://wa.me/916264530223"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-8 rounded-xl md:rounded-3xl bg-white border md:border-2 border-amber-200/50 hover:border-amber-400 hover:shadow-xl transition-all"
            >
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-amber-100 flex items-center justify-center mb-2 md:mb-5 border md:border-2 border-amber-300">
                <Phone className="w-4 h-4 md:w-7 md:h-7 text-amber-600" />
              </div>
              <h3 className="text-sm md:text-xl font-serif mb-1 md:mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600 text-[10px] md:text-base">+91 6264530223</p>
            </a>

            <div className="p-4 md:p-8 rounded-xl md:rounded-3xl bg-white border md:border-2 border-amber-200/50 hover:border-amber-400 hover:shadow-xl transition-all">
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-amber-100 flex items-center justify-center mb-2 md:mb-5 border md:border-2 border-amber-300">
                <MapPin className="w-4 h-4 md:w-7 md:h-7 text-amber-600" />
              </div>
              <h3 className="text-sm md:text-xl font-serif mb-1 md:mb-2 text-gray-800">Service Areas</h3>
              <p className="text-gray-600 text-[10px] md:text-base">Morena, Gwalior & Outstation</p>
            </div>

            <a 
              href="mailto:makeoverbysuhani@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-8 rounded-xl md:rounded-3xl bg-white border md:border-2 border-amber-200/50 hover:border-amber-400 hover:shadow-xl transition-all"
            >
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-amber-100 flex items-center justify-center mb-2 md:mb-5 border md:border-2 border-amber-300">
                <Mail className="w-4 h-4 md:w-7 md:h-7 text-amber-600" />
              </div>
              <h3 className="text-sm md:text-xl font-serif mb-1 md:mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600 text-[10px] md:text-base">makeoverbysuhani@gmail.com</p>
            </a>

            <a 
              href="https://www.instagram.com/suhanishivhare_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 md:p-8 rounded-xl md:rounded-3xl bg-white border md:border-2 border-amber-200/50 hover:border-amber-400 hover:shadow-xl transition-all"
            >
              <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-amber-100 flex items-center justify-center mb-2 md:mb-5 border md:border-2 border-amber-300">
                <Instagram className="w-4 h-4 md:w-7 md:h-7 text-amber-600" />
              </div>
              <h3 className="text-sm md:text-xl font-serif mb-1 md:mb-2 text-gray-800">Instagram</h3>
              <p className="text-gray-600 text-[10px] md:text-base">@suhanishivhare_</p>
            </a>
          </div>

          <div className="p-4 md:p-10 rounded-xl md:rounded-3xl border md:border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white backdrop-blur-sm shadow-xl">
            <h3 className="text-sm md:text-2xl font-royal mb-4 md:mb-8 text-amber-600">Important Information</h3>
            <div className="space-y-2 md:space-y-4">
              <div className="flex items-start gap-2 md:gap-4">
                <Check className="w-3 h-3 md:w-6 md:h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-[10px] md:text-base">Booking confirmed only after advance payment</p>
              </div>
              <div className="flex items-start gap-2 md:gap-4">
                <Check className="w-3 h-3 md:w-6 md:h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-[10px] md:text-base">All makeups are HD professional, long-lasting, and camera-friendly</p>
              </div>
              <div className="flex items-start gap-2 md:gap-4">
                <Check className="w-3 h-3 md:w-6 md:h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-[10px] md:text-base">Customized to client's skin type and preferences</p>
              </div>
              <div className="flex items-start gap-2 md:gap-4">
                <Check className="w-3 h-3 md:w-6 md:h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed text-[10px] md:text-base">Travel charges apply for outstation venues</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 md:mt-16">
            <Button 
              size="lg" 
              onClick={() => handleWhatsAppClick()}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-6 py-3 md:px-12 md:py-8 text-xs md:text-lg shadow-2xl"
            >
              <MessageCircle className="mr-1 md:mr-3 w-4 h-4 md:w-6 md:h-6" />
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t md:border-t-2 border-amber-200 py-6 md:py-12 px-3 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
            <div className="text-xl md:text-3xl font-royal">
              <span className="text-amber-600">Suhani</span>
            </div>

            <p className="text-gray-500 text-[10px] md:text-sm">
              © 2025 Professional Makeup Artist. All rights reserved.
            </p>

            <div className="flex gap-2 md:gap-4">
              <a 
                href="https://www.instagram.com/suhanishivhare_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 flex items-center justify-center transition-all group border md:border-2 border-amber-300"
              >
                <Instagram className="w-4 h-4 md:w-6 md:h-6 text-amber-600 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 left-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      </button>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-3xl transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
