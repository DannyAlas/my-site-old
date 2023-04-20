import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'

const Posts = () => (
  <Layout title="Home Lab">
    <Container maxW="750px">
      <Title>
        My Home Lab <Badge>2022</Badge>
      </Title>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href="https://github.com/DannyAlas/Web-Links">
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Languages</Meta>
          <span>HTML, CSS</span>
        </ListItem>
      </List>
      <Heading as="h2" fontSize={20} mb={4}>
        Eris: The Lab
      </Heading>
      <P>
        Named after the greek god of chaos for what will become self-explanatory
        reasons, Eris is the Lab in its totality. Ideally, one day, if there is
        a service I need to run, I can call Eris, like Tony Stark calls
        &quot;Jarvis&quot; to do it for me. I just think it would be so cool to
        be to say, &quot;Hey Eris, deploy this discord bot for me,&quot; and
        five minutes later, I have a discord bot, though we&#39;re a long way
        off from that. Also note I have a habit of naming most applications by
        the name of mythological, usually greek gods - much to the behest of{' '}
        <a href="https://www.yerich.net/blog/please-dont-name-your-services-after-greek-gods">
          Richard
        </a>{' '}
        - Deal with it Richard!
      </P>
      <P>
        Eris currently consists of everything I have running on both physical
        and cloud infrastructure. Here&#39;s a breakdown of the main categories,
        which we can delve deeper into later.
      </P>
      <ul>
        <li>
          Gaming Servers: <strong>Hades</strong>
        </li>
      </ul>
      <ul>
        <li>
          Media Server: <strong>Apollo</strong>
        </li>
      </ul>
      <ul>
        <li>
          Deployment Environments: <strong>Artemis</strong>
        </li>
      </ul>
      <ul>
        <li>
          Utilities: <strong>Hephaestus</strong>
        </li>
      </ul>
      <ul>
        <li>
          Management Infrastructure: <strong>Hera</strong>
        </li>
      </ul>

      <P>
        Each of these services is constantly being tweaked as new projects can
        often require functionality I still need to add. Thus I&#39;ve opted not
        to create super fleshed-out services but instead base the entire Lab
        around development principles that are easily mutable.
      </P>
      <P>
        The services are also as infrastructure agnostic as possible, leaving it
        up to me currently, but hopefully, Hera will decide how to deploy each
        service best in the future. For example, the media servers consist of
        cloud-based &#39;totally legal&#39; seedboxes, physical media storage
        servers, and physical Jellyfin and Nextcloud servers to host the media.
        Each of these should ideally be managed by Hera to scale and provide as
        needed.
      </P>
      <Heading as="h3" fontSize={20} mb={4}>
        Networking
      </Heading>
      <P>
        Before we delve into the physical hardware and then services, it&#39;s
        important to get an overview of the network. I have a few different
        subnets, each with their own purpose. The three main subnets are all
        we&#39;ll focus on here. The first is the <strong>internal</strong>{' '}
        subnet, which is used for all internal services such as GitLab and
        smart-home devices. The second is the <strong>external</strong> subnet,
        which is used for all public-facing services, like Plex and NextCloud.
        The third is the <strong>management</strong> subnet, which is used for
        all management services, like the DHCP server, Nginx proxy, and email
        server.
      </P>
      <P>
        My physical network is pretty simple and composed of a single 15-port
        Cisco switch, which is connected to my router. The router is currently a
        store-bought router flashed with OpenWRT, but I&#39;m planning on moving
        to OPNsense soon as I like the UI/UX more. I have a few VLANs set up on
        the switch, which is used to separate the different subnets. The switch
        is also connected to a few I.O.T. devices, like my Raspberry Pi and
        Pico, which are used for various projects. The Pico actually runs
        PiHole, which acts as my local DNS and is used to block ads on my
        network and among other things, the Pi 4 runs my DHCP server.
      </P>
      <Heading as="h3" fontSize={20} mb={4}>
        Physical Servers
      </Heading>
      <P>
        With that all said, let&#39;s get to the bare bones of what actually
        runs everything. I have two physical servers, both composed of old
        desktops I no longer use. I also have a Raspberry Pi 4 and Pico,
        alongside a few other I.O.T. devices. Both of my main servers are
        running ProxMox, which is a virtualization platform that allows me to
        run multiple VMs on a single physical server.
      </P>
      <Heading as="h4" fontSize={16} mb={4}>
        Server 1: Zeus
      </Heading>
      <P>
        THE FATHER OF ALL
        <br />
        <br />
        Specs: Intel i7-6700k, 16GB DDR4, 1x 2TB SSD, 3x 2TB HDD, 2x 1TB HDD
        <br />
        <br />
        Zeus is my main server, and it runs Proxmox and is where I host most of
        my services. Zeus is the first server I ever built, and it&#39;s been
        through a lot. He&#39;s spent much time with no case, He&#39;s had an
        AIO leak that broke a motherboard and CPU and two freak random
        RAM-breaking incidents. He&#39;s getting old... but still kicking on
        strong as ever.
      </P>
      <P>I have quite a few VM&#39;s running on Zeus, but the main ones are</P>
      <ul>
        <li>The Storage server | TrueNas Scale </li>
        <li>The Jellyfin server | Ubuntu 22.04</li>
        <li>The Nextcloud server | Ubuntu 20.04</li>
        <li>The Plex server | Ubuntu 22.04</li>
      </ul>
      <P />
      <Heading as="h4" fontSize={16} mb={4}>
        Server 2: Poseidon
      </Heading>
      <P>
        THE GOD OF THE SEA
        <br />
        <br />
        Specs: AMD FX 6300, 8GB DDR3, 250GB SSD, 2x 1TB HDD
        <br />
        <br />
        Poseidon is my backup server. Hosting my backup VMs and mirrors, as well
        as some utilities like an email server and NGINX proxy.{' '}
      </P>
      <Heading as="h2" fontSize={20} mb={4}>
        Hades: The Gaming Servers
      </Heading>
      <P>
        THE GOD OF THE UNDERWORLD, and mischief...
        <br />
        <br />
        As an avid game player, it&#39;s nice to be the one to provide a place
        where friends can all game together without the worry of cost,
        complexity, or administration. This all comes down to Hades to provide
        from the underworld...
      </P>
      <P>
        Hades is currently one large python script run in a docker container
        that can create Minecraft, Rust, Valheim, and other game servers. Though
        most servers are more often created by hand, the Minecraft server was
        what started this whole shebang, and It&#39;s pretty automated at this
        point. Here&#39;s an overview of how it works.
      </P>
      <P>
        The majority of Hades&#39; code is actually dedicated to <em>gaming</em>{' '}
        the cloud &#39;new-account-credit&#39; system. He&#39;s a bit
        mischievous, you see, most cloud providers offer a free credit, often
        $200, to new accounts created on the platform. This is meant to attract
        new users, but as a college student, I see{' '}
        <strong>free game servers</strong>. While I won&#39;t talk too much
        about the specifics, it simply does four things:
      </P>
      <ol>
        <li>
          <P>
            Creates new user emails, contact info, and crucially{' '}
            <strong>credit card</strong> information
          </P>
        </li>
        <li>
          <P>
            Using Selenium, signs up as a new user to one of the cloud providers
            with free credit available
          </P>
        </li>
        <li>
          <P>
            In the browser, creates and provisions the server, saving the ssh
            keys
          </P>
        </li>
      </ol>
      <blockquote>
        <P>
          I couldn&#39;t be bothered to learn each cloud provider scripting
          language or API (this was a mistake)
        </P>
      </blockquote>
      <ol>
        <li>
          Using the key, deploys a custom Minecraft server in docker with{' '}
          <Link href="https://github.com/itzg/docker-minecraft-server">
            ITZG&#39;s docker-minecraft-server <ExternalLinkIcon mx="2px" />
          </Link>
          and transfer files over sftp.
        </li>
      </ol>
      <h3 id="management">Management</h3>
      <P>This is mostly handled by Hera, but I&#39;ll go over the basics.</P>
      <P>
        Once the server is up, it must undergo some basic management, my local
        key management database can automatically find the required credentials
        to ssh into a server whenever needed manually, but I have also created
        some scripts to automate parts of this for me. For example, almost every
        Minecraft server I have uses a base set of plugins. I have the configs
        for these saved in Hades&#39; plugin database, which now automatically
        uploads the best config for the installed plugins to simplify the
        startup management.
      </P>
      <P>
        To manage the domains and server IPs, I host all my domains on
        Cloudflare. Hera can detect when a new server is made by Hades and use
        the Cloudflare API to update the DNS records for the required domains as
        needed.
      </P>
      <P>
        While not the prettiest of solutions, Hades can now almost automatically
        deploy a free Minecraft server in minutes. I&#39;ve recently been adding
        a feature to move the server to a new account once the &#39;free
        credits&#39; are up, as longer-running servers are currently moved
        manually. Rust and Valheim servers are started less frequently and thus
        really only take advantage of Hades&#39; free server provisioning
        features; the startup and management are much more manual.
      </P>
      <Heading as="h2" fontSize={20} mb={4}>
        Apollo: The Media Server
      </Heading>
      <P>
        THE SON OF ZEUS AND LEADER OF THE MUSES
        <br />
        <br />
        Apollo is, at its core, a Jellyfin server, but it also hosts a Nextcloud
        instance, a Plex server, and a few other services. It was one of the
        first things I virtualized on Zeus, hence the name, and it&#39;s one of
        a few public-facing services. It hosts all the media I have for my
        family and friends to access as well as a cloud storage solution for
        them to use.{' '}
      </P>
      <P>
        I use both Jellyfin and Plex since, while I prefer the simplicity of
        Jellyfin, It doesn&#39;t have good app support, especially for TVs. Plex
        is not my favorite, but it has much better app support, so my family
        members can use it to stream to their TVs and phones. Running both is
        not very compute-intensive, and it&#39;s a good enough solution for now.
      </P>
      <P>
        The Jellyfin server is the main media server, and it&#39;s hosted as a
        VM on my physical machine: Zeus. It&#39;s a pretty standard setup. The
        media is stored on my personal storage server, which is also a VM on
        Zeus. The storage server is a simple TrueNas Scale server which the
        Jellyfin server is also backed up to with rsync. Plex is basically the
        same setup.
      </P>
      <P>
        The Nextcloud server is also hosted on the same machine as the Jellyfin
        server, and it&#39;s used to provide a cloud storage solution for my
        family and friends. It&#39;s also used to host a few other services,
        like a password manager.
      </P>
      <P>
        The Seedbox is a cloud-based service that I use to download media from
        the internet. It&#39;s a pretty standard setup, and it&#39;s hosted on a
        cloud provider with free credit. I happened to get lucky with the cloud
        provider giving me a year of free service, but after that, I&#39;ll
        probably move to a self-hosted seedbox.{' '}
      </P>
      <Heading as="h2" fontSize={20} mb={4}>
        Artemis: The Deployment Environment
      </Heading>
      <P>
        THE GODDESS OF BIRTHING
        <br />
        <br />
        Artemis gives life to my code. She is a collection of tools I use to
        deploy my applications. I host my own GitLab instance here, which is
        used to host my personal projects and to host my own GitLab CI/CD
        pipelines. It&#39;s hosted on a VM on my physical machine: Zeus, with
        backups to my storage server. I also host some non-GitLab CD pipelines,
        which are a collection of bash scripts and Ansible playbooks that are
        run whenever I push to a specific repository. These pipelines are used
        to deploy my applications to my physical servers.
      </P>
      <P>Some of the applications I host are:</P>
      <ul>
        <li>Personal website </li>
        <li>Discord bots </li>
        <li>Web scraping scripts</li>
        <li>
          Compute swarm
          <blockquote>
            <P>
              I&#39;ll talk more about these in a future post, it basically
              allows me to offload CPU-intensive tasks to a bunch of VMs
            </P>
          </blockquote>
        </li>
        <li>Small Minecraft server</li>
        <li>Email server</li>
        <li>A few other small projects</li>
      </ul>
      <P />
      <Heading as="h2" fontSize={20} mb={4}>
        Hephaestus: The Utility Server
      </Heading>
      <P>
        THE GOD OF FIRE, METALWORKING, AND TECHNOLOGY
        <br />
        <br />
        Hephaestus is a utility service that I use to manage a few small
        services. It&#39;s hosted on a VM on my physical machine: Zeus, with
        backups to my storage server. It manages a few utilities like my DHCP
        server, DNS server, email server, and a few other small services. One of
        its important hosts is Hestia, which I use to manage my ssh keys.
      </P>
      <Heading as="h4" fontSize={16}>
        Hestia: The Key Management Database
      </Heading>
      <P>
        THE GODDESS OF HEARTH
        <br />
        <br />
        Hestia is a simple database that I use to manage my ssh keys. It&#39;s
        hosted on a VM on my physical machine: Zeus, with backups to my storage
        server. It&#39;s a simple Flask app that uses a SQLite database to store
        the ssh keys for my servers. It&#39;s used by Hera to get the ssh keys
        for a server whenever needed and can upload them to an ssh-agent.
        It&#39;s also used by my compute swarm to get the ssh keys for the VMs
        in the swarm.
      </P>
      <Heading as="h2" fontSize={20} mb={4}>
        Hera: The Management Infrastructure
      </Heading>
      <P>
        THE GODDESS OF THE HOME
        <br />
        <br />
        Hera is the newest and least stable part of my infrastructure. It&#39;s
        a collection of Ansible playbooks that I use to manage my
        infrastructure. It&#39;s still in development, but her main purpose is
        to simplify the management of my infrastructure. She’s also, as
        mentioned before, meant to be infrastructure agnostic, so I can deploy
        it to any server, and it will work. She’s currently hosted as a Debian
        VM on my physical machine: Zeus, with backups to my storage server.
      </P>
      <P>
        Her core functionality is to manage my physical servers, and is
        currently able to do the following:
      </P>
      <ul>
        <li>
          Install and configure basic NGINX, NodeJS, and Docker setups for a
          server
        </li>
        <li>
          Communicate with my local key management database to get the ssh keys
          for a server
        </li>
        <li>
          Simple server management like starting, stopping, and restarting
          servers
        </li>
        <li>very basic command line interface to manage the servers</li>
      </ul>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../../components/chakra'
