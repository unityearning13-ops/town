export interface SlideData {
  id: number;
  slideNumber: string;
  category: string;
  type:
    | 'intro_cover'
    | 'welcome'
    | 'updates'
    | 'homework'
    | 'number_checker'
    | 'policy_warning'
    | 'ways_overview'
    | 'way_lead_generation'
    | 'way_course_project'
    | 'way_trainer_account'
    | 'trainer_eligibility'
    | 'recruitment'
    | 'closing';
  speakerNote: string;
}

export const SLIDES_DATA: SlideData[] = [
  {
    id: 1,
    slideNumber: "01",
    category: "Official Cover",
    type: "intro_cover",
    speakerNote: "মিটিংয়ের সুচনা কভার পেজ। ইউনিটি আর্নিং ই-লার্নিং প্ল্যাটফর্মের অফিশিয়াল কাউন্সিলিং ও টাউন হল মিটিংয়ে সবাইকে সুস্বাগতম জানিয়ে প্রেজেন্টেশন শুরু করুন।"
  },
  {
    id: 2,
    slideNumber: "02",
    category: "Meeting Agenda",
    type: "welcome",
    speakerNote: "মিটিংয়ের সূচনায় প্ল্যাটফর্মের নতুন আপডেট, কাজের সুযোগ, আয়ের মাধ্যম এবং নিয়মাবলির সারাংশ তুলে ধরুন।"
  },
  {
    id: 3,
    slideNumber: "03",
    category: "Monthly Updates",
    type: "updates",
    speakerNote: "১০টি কনভার্ট ও কোর্স সম্পন্নকারী মেম্বারদের জন্য সার্টিফিকেট অ্যাওয়ার্ড ঘোষণা করুন।"
  },
  {
    id: 4,
    slideNumber: "04",
    category: "Academic Policy",
    type: "homework",
    speakerNote: "নতুন হোমওয়ার্ক পোর্টাল ব্যবহারের আবশ্যকতা ও সময়মতো সাবমিট করার গুরুত্ব বুঝিয়ে দিন।"
  },
  {
    id: 5,
    slideNumber: "05",
    category: "System Workflow",
    type: "number_checker",
    speakerNote: "নাম্বার চেকারের ৪ ধাপের ভেরিফিকেশন ফ্লো এবং পূর্বে ব্যবহৃত নাম্বার যাচাইয়ের নিয়ম ব্যাখ্যা করুন।"
  },
  {
    id: 6,
    slideNumber: "06",
    category: "Compliance & Safety",
    type: "policy_warning",
    speakerNote: "মিটিং এটেন্ড করা লিডদের ভুলভাবে শিওর শট না দেওয়ার অফিসিয়াল ওয়ার্নিং ও অ্যাকাউন্ট ব্লক পলিসি স্পষ্টভাবে বলুন।"
  },
  {
    id: 7,
    slideNumber: "07",
    category: "Career Pathways",
    type: "ways_overview",
    speakerNote: "প্ল্যাটফর্মে আয়ের তিনটি মূল পথ: লিড জেনারেশন, কোর্স+প্রজেক্ট, এবং ট্রেইনার/সাব-এডমিন অ্যাকাউন্ট।"
  },
  {
    id: 8,
    slideNumber: "08",
    category: "Pathway 01",
    type: "way_lead_generation",
    speakerNote: "লিড জেনারেশন ফ্লো ও দৈনিক সম্ভাব্য ৬০০-৭০০ টাকার আয়ের সম্ভাবনা (পারফরম্যান্স নির্ভর) বর্ণনা করুন।"
  },
  {
    id: 9,
    slideNumber: "09",
    category: "Pathway 02",
    type: "way_course_project",
    speakerNote: "কোর্স সমাপ্তির পর প্রজেক্ট ওয়ার্ক ও ভবিষ্যতে মেন্টরশিপ সুযোগের ৫টি ধাপ ব্যাখ্যা করুন।"
  },
  {
    id: 10,
    slideNumber: "10",
    category: "Pathway 03",
    type: "way_trainer_account",
    speakerNote: "ট্রেইনার/সাব-এডমিন একাউন্টে মাসিক বেতন ও দৈনিক স্টুডেন্ট এক্টিভিটির সম্ভাব্য আয়ের হিসাব উপস্থাপন করুন।"
  },
  {
    id: 11,
    slideNumber: "11",
    category: "Requirements",
    type: "trainer_eligibility",
    speakerNote: "ট্রেইনার হওয়ার ৭টি আবশ্যিক যোগ্যতা ও ১৫+ কনভার্ট অভিজ্ঞতার চেকলিস্ট পর্যালোচনা করুন।"
  },
  {
    id: 12,
    slideNumber: "12",
    category: "Hiring Announcement",
    type: "recruitment",
    speakerNote: "ফিমেল কাউন্সিলর নিয়োগ বিজ্ঞপ্তি এবং নিজ নিজ টিম লিডারের সাথে যোগাযোগের নির্দেশ দিন।"
  },
  {
    id: 13,
    slideNumber: "13",
    category: "Conclusion",
    type: "closing",
    speakerNote: "মিটিং সমাপ্তি বক্তব্য, সবার কাজের উত্তরোত্তর সাফল্য কামনা ও ঐক্যবদ্ধ এগিয়ে যাওয়ার বার্তা।"
  }
];
