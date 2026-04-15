"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Almohamady"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="مطاعم المحمدي"
      description="تجربة طعام لا تُنسى في قلب العامرات بمسقط، حيث الأصالة والجودة تجتمع في كل طبق. اكتشف أفضل المأكولات التقليدية والحديثة."
      buttons={[
        {
          text: "احجز طاولتك",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/set-cups-with-plant-twigs-near-dried-fruits-nuts-tray-table_23-2148081037.jpg",
          imageAlt: "Traditional ambiance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-kebab-chopped-potato-with-fat-tail-with-chicken-kebab-onions_141793-4976.jpg",
          imageAlt: "Traditional ambiance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-assorted-cheese-plate-with-honey-herbs-olives-with-dried-apricots_141793-4749.jpg",
          imageAlt: "Traditional ambiance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cup-tea-with-lemon-light-white-space_140725-79718.jpg",
          imageAlt: "Traditional ambiance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plate-event-dinner-party-glass_1203-5093.jpg",
          imageAlt: "Traditional ambiance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/ramadan-celebration-with-delicious-food_23-2151404302.jpg",
          imageAlt: "Traditional ambiance",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="قصة مطاعم المحمدي في مسقط"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "مندي دجاج",
          price: "2.5 OMR",
          imageSrc: "http://img.b2bpic.net/free-photo/dates-fruit-with-turkish-delight-table_23-2148088463.jpg",
        },
        {
          id: "p2",
          name: "مشاوي مشكلة",
          price: "4.5 OMR",
          imageSrc: "http://img.b2bpic.net/free-photo/mug-drink-near-dried-fruits-saucer-teapot-burlap_23-2148080974.jpg",
        },
        {
          id: "p3",
          name: "مقبلات متنوعة",
          price: "1.5 OMR",
          imageSrc: "http://img.b2bpic.net/free-photo/chigirtma-plov-rice-garnish-with-vegetables-herbs_114579-977.jpg",
        },
        {
          id: "p4",
          name: "مأكولات بحرية",
          price: "5.5 OMR",
          imageSrc: "http://img.b2bpic.net/free-photo/traditional-caucasian-sac-ichi-with-grilled-meat-vegetables_114579-4425.jpg",
        },
        {
          id: "p5",
          name: "قهوة وتمر",
          price: "1.0 OMR",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-rice-with-carrot-cooked-with-lamb-served-with-yogurt-salad_141793-2449.jpg",
        },
        {
          id: "p6",
          name: "كنافة",
          price: "1.2 OMR",
          imageSrc: "http://img.b2bpic.net/free-photo/hummus-plate-still-life-top-view_23-2149595655.jpg",
        },
      ]}
      title="قائمة طعامنا المميزة"
      description="استكشف تشكيلتنا من الأطباق التقليدية المحضرة بعناية فائقة."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "أحمد السعيدي",
          role: "زبون دائم",
          company: "مسقط",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-chilling-out-classy-lifestyle-reserved-concept_53876-46898.jpg",
        },
        {
          id: "2",
          name: "فاطمة البلوشي",
          role: "زائرة",
          company: "العامرات",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12688.jpg",
        },
        {
          id: "3",
          name: "سعيد الكندي",
          role: "زبون",
          company: "مسقط",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-with-delicious-cocktail_23-2150166104.jpg",
        },
        {
          id: "4",
          name: "مريم الزدجالي",
          role: "زائرة",
          company: "مسقط",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-asian-man-friends-reunion_23-2149244687.jpg",
        },
        {
          id: "5",
          name: "خالد العامري",
          role: "زبون",
          company: "العامرات",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-happy-rich-stylish-man-dressed-modern-elegant-clothes-holds-cup-coffee-outdoor-restaurant_613910-3978.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "10k+",
          label: "زبون سعيد",
        },
        {
          value: "50+",
          label: "طبق مميز",
        },
        {
          value: "5*",
          label: "تقييم الجودة",
        },
      ]}
      title="آراء ضيوفنا الكرام"
      description="ماذا يقول زبائننا عن تجربتهم معنا في العامرات."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "أين يقع المطعم؟",
          content: "نحن في العامرات، مسقط.",
        },
        {
          id: "f2",
          title: "هل يتوفر حجز مسبق؟",
          content: "نعم، يمكنك الحجز عبر الاتصال بنا.",
        },
        {
          id: "f3",
          title: "هل هناك خيارات للنباتيين؟",
          content: "نعم، تتوفر خيارات متنوعة.",
        },
      ]}
      title="أسئلة شائعة"
      description="هل لديك استفسار؟ إليك الإجابات."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      text="تواصل معنا لحجز طاولتك اليوم في مطاعم المحمدي العامرات."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "الرئيسية",
              href: "#hero",
            },
            {
              label: "حولنا",
              href: "#about",
            },
          ],
        },
        {
          items: [
            {
              label: "القائمة",
              href: "#menu",
            },
            {
              label: "اتصل بنا",
              href: "#contact",
            },
          ],
        },
      ]}
      logoText="مطاعم المحمدي"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
