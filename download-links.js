const download_links = {
    windows: {
        stable_64bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_win64.exe.zip',
        stable_32bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_win32.exe.zip',
        beta_64bit: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_win64.exe.zip',
        beta_32bit: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_win32.exe.zip',
        mono_64bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/mono/Godot_v3.1.1-stable_mono_win64.zip',
        mono_32bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/mono/Godot_v3.1.1-stable_mono_win32.zip',
        mono_64bit_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/mono/Godot_v3.2-alpha2_mono_x11_64.zip',
        mono_32bit_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/mono/Godot_v3.2-alpha2_mono_win32.zip',
    },
    mac: {
        stable: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_osx.64.zip',
        beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_osx.64.zip',
        mono: 'https://downloads.tuxfamily.org/godotengine/3.1.1/mono/Godot_v3.1.1-stable_mono_osx.64.zip',
        mono_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/mono/Godot_v3.2-alpha2_mono_osx.64.zip',
    },
    linux: {
        stable_64bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_x11.64.zip',
        stable_32bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_x11.32.zip',
        beta_64bit: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_x11.64.zip',
        beta_32bit: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_x11.32.zip',
        mono_64bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/mono/Godot_v3.1.1-stable_mono_x11_64.zip',
        mono_32bit: 'https://downloads.tuxfamily.org/godotengine/3.1.1/mono/Godot_v3.1.1-stable_mono_x11_32.zip',
        mono_64bit_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/mono/Godot_v3.2-alpha2_mono_x11_64.zip',
        mono_32bit_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/mono/Godot_v3.2-alpha2_mono_x11_32.zip',
    },
    server: {
        headless: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_linux_headless.64.zip',
        server: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_linux_server.64.zip',
        headless_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_linux_headless.64.zip',
        server_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_linux_server.64.zip',
    },
    export_templates: {
        standard: 'https://downloads.tuxfamily.org/godotengine/3.1.1/Godot_v3.1.1-stable_export_templates.tpz',
        mono: 'https://downloads.tuxfamily.org/godotengine/3.1.1/mono/Godot_v3.1.1-stable_mono_export_templates.tpz',
        standard_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/Godot_v3.2-alpha2_export_templates.tpz',
        mono_beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/mono/Godot_v3.2-alpha2_mono_export_templates.tpz',
    },
    source: {
        stable: 'https://downloads.tuxfamily.org/godotengine/3.1.1/godot-3.1.1-stable.tar.xz',
        beta: 'https://downloads.tuxfamily.org/godotengine/3.2/alpha2/godot-3.2-alpha2.tar.xz',
    },
}