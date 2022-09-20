import { useCallback, useRef, useEffect, useState } from "react";

const defaultImages = [
  {
    id: "tu6mggpGdSc",
    created_at: "2022-08-19T21:21:10Z",
    updated_at: "2022-09-20T06:32:19Z",
    promoted_at: "2022-08-20T07:16:01Z",
    width: 3544,
    height: 5316,
    color: "#8c8ca6",
    blur_hash: "LVEfTsIVt6t7_4bIf6ayIoxaWBWB",
    description: "Reine",
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660943628832-26eed12cb4a5",
    },
    links: {
      self: "https://api.unsplash.com/photos/tu6mggpGdSc",
      html: "https://unsplash.com/photos/tu6mggpGdSc",
      download:
        "https://unsplash.com/photos/tu6mggpGdSc/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
      download_location:
        "https://api.unsplash.com/photos/tu6mggpGdSc/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
    },
    categories: [],
    likes: 47,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "8P6AXpf1NMU",
      updated_at: "2022-09-15T17:45:20Z",
      username: "mathaywarduk",
      name: "Mat Hayward",
      first_name: "Mat",
      last_name: "Hayward",
      twitter_username: null,
      portfolio_url: "https://mathayward.com/",
      bio: "Part time adventurer and landscape photographer. Often in Scotland.",
      location: "Nottingham",
      links: {
        self: "https://api.unsplash.com/users/mathaywarduk",
        html: "https://unsplash.com/@mathaywarduk",
        photos: "https://api.unsplash.com/users/mathaywarduk/photos",
        likes: "https://api.unsplash.com/users/mathaywarduk/likes",
        portfolio: "https://api.unsplash.com/users/mathaywarduk/portfolio",
        following: "https://api.unsplash.com/users/mathaywarduk/following",
        followers: "https://api.unsplash.com/users/mathaywarduk/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "mathaywarduk",
      total_collections: 6,
      total_likes: 9,
      total_photos: 66,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "mathaywarduk",
        portfolio_url: "https://mathayward.com/",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "Canon",
      model: " EOS 6D",
      name: "Canon, EOS 6D",
      exposure_time: "1/800",
      aperture: "6.3",
      focal_length: "40.0",
      iso: 125,
    },
    location: {
      title: "Sakrisøya, Reine, Norway",
      name: "Sakrisøya, Reine, Norway",
      city: null,
      country: "Norway",
      position: {
        latitude: 67.941087,
        longitude: 13.110635,
      },
    },
    views: 145247,
    downloads: 1370,
  },
  {
    id: "tu6mggpGdSc",
    created_at: "2022-08-19T21:21:10Z",
    updated_at: "2022-09-20T06:32:19Z",
    promoted_at: "2022-08-20T07:16:01Z",
    width: 3544,
    height: 5316,
    color: "#8c8ca6",
    blur_hash: "LVEfTsIVt6t7_4bIf6ayIoxaWBWB",
    description: "Reine",
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660943628832-26eed12cb4a5",
    },
    links: {
      self: "https://api.unsplash.com/photos/tu6mggpGdSc",
      html: "https://unsplash.com/photos/tu6mggpGdSc",
      download:
        "https://unsplash.com/photos/tu6mggpGdSc/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
      download_location:
        "https://api.unsplash.com/photos/tu6mggpGdSc/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
    },
    categories: [],
    likes: 47,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "8P6AXpf1NMU",
      updated_at: "2022-09-15T17:45:20Z",
      username: "mathaywarduk",
      name: "Mat Hayward",
      first_name: "Mat",
      last_name: "Hayward",
      twitter_username: null,
      portfolio_url: "https://mathayward.com/",
      bio: "Part time adventurer and landscape photographer. Often in Scotland.",
      location: "Nottingham",
      links: {
        self: "https://api.unsplash.com/users/mathaywarduk",
        html: "https://unsplash.com/@mathaywarduk",
        photos: "https://api.unsplash.com/users/mathaywarduk/photos",
        likes: "https://api.unsplash.com/users/mathaywarduk/likes",
        portfolio: "https://api.unsplash.com/users/mathaywarduk/portfolio",
        following: "https://api.unsplash.com/users/mathaywarduk/following",
        followers: "https://api.unsplash.com/users/mathaywarduk/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "mathaywarduk",
      total_collections: 6,
      total_likes: 9,
      total_photos: 66,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "mathaywarduk",
        portfolio_url: "https://mathayward.com/",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "Canon",
      model: " EOS 6D",
      name: "Canon, EOS 6D",
      exposure_time: "1/800",
      aperture: "6.3",
      focal_length: "40.0",
      iso: 125,
    },
    location: {
      title: "Sakrisøya, Reine, Norway",
      name: "Sakrisøya, Reine, Norway",
      city: null,
      country: "Norway",
      position: {
        latitude: 67.941087,
        longitude: 13.110635,
      },
    },
    views: 145247,
    downloads: 1370,
  },
  {
    id: "tu6mggpGdSc",
    created_at: "2022-08-19T21:21:10Z",
    updated_at: "2022-09-20T06:32:19Z",
    promoted_at: "2022-08-20T07:16:01Z",
    width: 3544,
    height: 5316,
    color: "#8c8ca6",
    blur_hash: "LVEfTsIVt6t7_4bIf6ayIoxaWBWB",
    description: "Reine",
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1660943628832-26eed12cb4a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660943628832-26eed12cb4a5",
    },
    links: {
      self: "https://api.unsplash.com/photos/tu6mggpGdSc",
      html: "https://unsplash.com/photos/tu6mggpGdSc",
      download:
        "https://unsplash.com/photos/tu6mggpGdSc/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
      download_location:
        "https://api.unsplash.com/photos/tu6mggpGdSc/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
    },
    categories: [],
    likes: 47,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "8P6AXpf1NMU",
      updated_at: "2022-09-15T17:45:20Z",
      username: "mathaywarduk",
      name: "Mat Hayward",
      first_name: "Mat",
      last_name: "Hayward",
      twitter_username: null,
      portfolio_url: "https://mathayward.com/",
      bio: "Part time adventurer and landscape photographer. Often in Scotland.",
      location: "Nottingham",
      links: {
        self: "https://api.unsplash.com/users/mathaywarduk",
        html: "https://unsplash.com/@mathaywarduk",
        photos: "https://api.unsplash.com/users/mathaywarduk/photos",
        likes: "https://api.unsplash.com/users/mathaywarduk/likes",
        portfolio: "https://api.unsplash.com/users/mathaywarduk/portfolio",
        following: "https://api.unsplash.com/users/mathaywarduk/following",
        followers: "https://api.unsplash.com/users/mathaywarduk/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1642426343029-99e708a70c12image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "mathaywarduk",
      total_collections: 6,
      total_likes: 9,
      total_photos: 66,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "mathaywarduk",
        portfolio_url: "https://mathayward.com/",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "Canon",
      model: " EOS 6D",
      name: "Canon, EOS 6D",
      exposure_time: "1/800",
      aperture: "6.3",
      focal_length: "40.0",
      iso: 125,
    },
    location: {
      title: "Sakrisøya, Reine, Norway",
      name: "Sakrisøya, Reine, Norway",
      city: null,
      country: "Norway",
      position: {
        latitude: 67.941087,
        longitude: 13.110635,
      },
    },
    views: 145247,
    downloads: 1370,
  },
  {
    id: "xmtTLyh0zeg",
    created_at: "2022-08-20T08:31:44Z",
    updated_at: "2022-09-19T12:35:00Z",
    promoted_at: "2022-08-21T14:24:01Z",
    width: 3648,
    height: 5472,
    color: "#d9d9d9",
    blur_hash: "L+IhjVxuM{az_4t6jZj[W?RjoLjZ",
    description: null,
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1660984302446-734e356b9db8?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1660984302446-734e356b9db8?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1660984302446-734e356b9db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1660984302446-734e356b9db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1660984302446-734e356b9db8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1660984302446-734e356b9db8",
    },
    links: {
      self: "https://api.unsplash.com/photos/xmtTLyh0zeg",
      html: "https://unsplash.com/photos/xmtTLyh0zeg",
      download:
        "https://unsplash.com/photos/xmtTLyh0zeg/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
      download_location:
        "https://api.unsplash.com/photos/xmtTLyh0zeg/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
    },
    categories: [],
    likes: 30,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      nature: {
        status: "rejected",
      },
    },
    user: {
      id: "HlVy631U_4k",
      updated_at: "2022-09-15T08:00:55Z",
      username: "cassidy_towers",
      name: "Cassidy Towers",
      first_name: "Cassidy",
      last_name: "Towers",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/cassidy_towers",
        html: "https://unsplash.com/@cassidy_towers",
        photos: "https://api.unsplash.com/users/cassidy_towers/photos",
        likes: "https://api.unsplash.com/users/cassidy_towers/likes",
        portfolio: "https://api.unsplash.com/users/cassidy_towers/portfolio",
        following: "https://api.unsplash.com/users/cassidy_towers/following",
        followers: "https://api.unsplash.com/users/cassidy_towers/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1660982097620-097a70585552?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1660982097620-097a70585552?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1660982097620-097a70585552?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: null,
      total_collections: 1,
      total_likes: 4,
      total_photos: 11,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: null,
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "Canon",
      model: " EOS 6D",
      name: "Canon, EOS 6D",
      exposure_time: "1/800",
      aperture: "2.8",
      focal_length: "28.0",
      iso: 100,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 277540,
    downloads: 1397,
  },
  {
    id: "l9p-7JBmVFE",
    created_at: "2022-08-21T21:09:55Z",
    updated_at: "2022-09-20T05:32:07Z",
    promoted_at: "2022-08-22T16:48:01Z",
    width: 4000,
    height: 6000,
    color: "#404040",
    blur_hash: "LYCZkZ9FxaWB~qD%t7WB%NRjayfR",
    description: "Misty morning in the mountains",
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1661115427009-1f08343e0f43?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1661115427009-1f08343e0f43?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1661115427009-1f08343e0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1661115427009-1f08343e0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1661115427009-1f08343e0f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661115427009-1f08343e0f43",
    },
    links: {
      self: "https://api.unsplash.com/photos/l9p-7JBmVFE",
      html: "https://unsplash.com/photos/l9p-7JBmVFE",
      download:
        "https://unsplash.com/photos/l9p-7JBmVFE/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
      download_location:
        "https://api.unsplash.com/photos/l9p-7JBmVFE/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
    },
    categories: [],
    likes: 149,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
    user: {
      id: "ZmNp0wgk7k4",
      updated_at: "2022-09-19T14:11:02Z",
      username: "l2space",
      name: "Adrian Mag",
      first_name: "Adrian",
      last_name: "Mag",
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: "https://api.unsplash.com/users/l2space",
        html: "https://unsplash.com/@l2space",
        photos: "https://api.unsplash.com/users/l2space/photos",
        likes: "https://api.unsplash.com/users/l2space/likes",
        portfolio: "https://api.unsplash.com/users/l2space/portfolio",
        following: "https://api.unsplash.com/users/l2space/following",
        followers: "https://api.unsplash.com/users/l2space/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1644283213203-9f4b5bab3c08image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1644283213203-9f4b5bab3c08image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1644283213203-9f4b5bab3c08image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "adimag99",
      total_collections: 1,
      total_likes: 4,
      total_photos: 148,
      accepted_tos: true,
      for_hire: false,
      social: {
        instagram_username: "adimag99",
        portfolio_url: null,
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      title: "Gârda de Sus, Romania",
      name: "Gârda de Sus, Romania",
      city: "Gârda de Sus",
      country: "Romania",
      position: {
        latitude: 46.45434,
        longitude: 22.813341,
      },
    },
    views: 3809721,
    downloads: 48887,
  },
  {
    id: "JO5sn0D96Qg",
    created_at: "2022-08-22T10:54:30Z",
    updated_at: "2022-09-20T00:36:48Z",
    promoted_at: "2022-08-23T14:32:01Z",
    width: 5146,
    height: 3431,
    color: "#a6a6a6",
    blur_hash: "LJGuj:Ri%gx]?ce-tRt7~qWCM{ja",
    description: null,
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1661165587093-53c1029a6646?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1661165587093-53c1029a6646?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80",
      regular:
        "https://images.unsplash.com/photo-1661165587093-53c1029a6646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=1080",
      small:
        "https://images.unsplash.com/photo-1661165587093-53c1029a6646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=400",
      thumb:
        "https://images.unsplash.com/photo-1661165587093-53c1029a6646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg&ixlib=rb-1.2.1&q=80&w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1661165587093-53c1029a6646",
    },
    links: {
      self: "https://api.unsplash.com/photos/JO5sn0D96Qg",
      html: "https://unsplash.com/photos/JO5sn0D96Qg",
      download:
        "https://unsplash.com/photos/JO5sn0D96Qg/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
      download_location:
        "https://api.unsplash.com/photos/JO5sn0D96Qg/download?ixid=MnwyNzUwNDV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM2NjE3ODg",
    },
    categories: [],
    likes: 33,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      wallpapers: {
        status: "rejected",
      },
      "arts-culture": {
        status: "approved",
        approved_on: "2022-08-30T16:38:37Z",
      },
      "business-work": {
        status: "approved",
        approved_on: "2022-08-30T13:59:43Z",
      },
      interiors: {
        status: "approved",
        approved_on: "2022-08-30T14:24:12Z",
      },
    },
    user: {
      id: "CCPaZtEb3jc",
      updated_at: "2022-09-20T08:11:27Z",
      username: "rhamely",
      name: "Rhamely",
      first_name: "Rhamely",
      last_name: null,
      twitter_username: null,
      portfolio_url: "http://www.rhamely.com",
      bio: "Italy // Photographer of weddings and portraits // Freelance // 👉 www.rhamely.com",
      location: "Northern Italy",
      links: {
        self: "https://api.unsplash.com/users/rhamely",
        html: "https://unsplash.com/@rhamely",
        photos: "https://api.unsplash.com/users/rhamely/photos",
        likes: "https://api.unsplash.com/users/rhamely/likes",
        portfolio: "https://api.unsplash.com/users/rhamely/portfolio",
        following: "https://api.unsplash.com/users/rhamely/following",
        followers: "https://api.unsplash.com/users/rhamely/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1659888271968-ce5880303993image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=32&h=32",
        medium:
          "https://images.unsplash.com/profile-1659888271968-ce5880303993image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=64&h=64",
        large:
          "https://images.unsplash.com/profile-1659888271968-ce5880303993image?ixlib=rb-1.2.1&crop=faces&fit=crop&w=128&h=128",
      },
      instagram_username: "rhamely",
      total_collections: 13,
      total_likes: 594,
      total_photos: 379,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "rhamely",
        portfolio_url: "http://www.rhamely.com",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: null,
      model: null,
      name: null,
      exposure_time: null,
      aperture: null,
      focal_length: null,
      iso: null,
    },
    location: {
      title: null,
      name: null,
      city: null,
      country: null,
      position: {
        latitude: null,
        longitude: null,
      },
    },
    views: 302573,
    downloads: 4618,
  },
];

export const useUnsplash = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  // TODO remove default images
  // const [images, setImages] = useState<any[]>([]);
  const [images, setImages] = useState<any[]>(defaultImages);

  // timer
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const getRandomImages = useCallback(async () => {
    try {
      setLoading(true);
      // TODO uncomment
      // const { data } = await axios().get(
      //   `${config.apiUrl?.replace(/\/$/, "")}/unsplash/random`
      // );

      setLoading(false);
      // TODO uncomment
      // setImages(data);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  const searchImages = async (keywords: string) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    if (!keywords) {
      return getRandomImages();
    }

    try {
      setLoading(true);
      timer.current = setTimeout(async () => {
        // TODO uncomment
        // const { data } = await axios().get(
        //   `${config.apiUrl?.replace(
        //     /\/$/,
        //     ""
        //   )}/unsplash/search?keyword=${keywords}`
        // );

        setLoading(false);

        // setImages(data.results);
      }, 1000);
    } catch (error) {
      setLoading(false);
      if (timer.current) clearTimeout(timer.current);
    }
  };

  const getRandomImagesRef = useRef(getRandomImages);

  useEffect(() => {
    getRandomImagesRef.current = getRandomImages;
  }, [getRandomImages]);

  useEffect(() => {
    getRandomImagesRef.current();
  }, []);

  return { searchImages, isLoading, images };
};
